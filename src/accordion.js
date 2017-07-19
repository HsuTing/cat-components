'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';

import * as style from './style/accordion';

export const accordionStyle = style;

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
    contentStyle: PropTypes.func
  }

  static defaultProps = {
    contentStyle: () => {}
  }

  render() {
    const {index, children, contentStyle, ...props} = this.props;

    return (
      <div {...props}>
        {React.Children.map(children, (item, itemIndex) => {
          const [title, content] = item.props.children;
          const newContentStyle = {
            ...style.content,
            ...content.props.style,
            ...style.style(index === itemIndex),
            ...contentStyle(index === itemIndex)
          };

          return React.cloneElement(item, {},
            title,
            React.cloneElement(content, {
              style: newContentStyle
            })
          );
        })}
      </div>
    );
  }
}
