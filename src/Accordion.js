'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';

import style from 'style/accordion';

@radium
export default class Accordion extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(
      (propValue, key) => {
        if(propValue[key].type !== StyleRoot)
          return new Error(
            'The childrens of "Accordion" should be "StyleRoot" in "radium".'
          );

        if(React.Children.count(propValue[key].props.children) !== 2)
          return new Error(
            'The childrens of "Accordion" can only have two childrens.'
          );
      }
    ).isRequired,
    index: PropTypes.number.isRequired,
    contentStyles: PropTypes.func
  }

  static defaultProps = {
    contentStyles: () => {}
  }

  render() {
    const {index, children, contentStyles, ...props} = this.props;

    return (
      <div {...props}>
        {React.Children.map(children, (item, itemIndex) => {
          const [title, content] = item.props.children;
          const contentStyle = Object.assign({},
            style.content,
            content.props.style,
            style.styles(index === itemIndex),
            contentStyles(index === itemIndex)
          );

          return React.cloneElement(item, {},
            title,
            React.cloneElement(content, {
              style: contentStyle
            })
          );
        })}
      </div>
    );
  }
}
