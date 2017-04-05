'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';

import style from './style/accordion';

@radium
export default class Accordion extends React.Component {
  static propTypes = {
    children: React.PropTypes.arrayOf(
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
    index: React.PropTypes.number.isRequired,
    showStyle: React.PropTypes.object,
    hideStyle: React.PropTypes.object
  }

  static defaultProps = {
    showStyle: style.showStyle,
    hideStyle: style.hideStyle
  }

  render() {
    const {index, children, showStyle, hideStyle, ...props} = this.props;

    return (
      <div {...props}>
        {React.Children.map(children, (item, itemIndex) => {
          const [title, content] = item.props.children;
          const contentStyle = Object.assign({},
            style.content,
            content.props.style,
            index === itemIndex ? showStyle : hideStyle
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
