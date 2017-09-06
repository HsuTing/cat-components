'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';

import toggleStyle from 'utils/toggleStyle';
import loadAnimation from 'utils/loadAnimation';

import * as style from './style/accordion';

export const accordionStyle = style;

@radium
export default class Accordion extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(
      (propValue, key) => {
        if(React.Children.count(propValue[key].props.children) !== 2)
          return new Error(
            'The childrens of "Accordion" can only have two childrens.'
          );
      }
    ).isRequired,
    index: PropTypes.number.isRequired,
    animationStyles: PropTypes.arrayOf(
      PropTypes.object
    )
  }

  static defaultProps = {
    animationStyles: [style.hideStyle, style.showStyle]
  }

  constructor(props) {
    super(props);
    this.showStyle = toggleStyle(true, props.animationStyles);
    this.hideStyle = toggleStyle(false, props.animationStyles);
  }

  render() {
    const {index, children, ...props} = this.props;

    delete props.animationStyles;

    return (
      <div {...props}>
        {loadAnimation([this.showStyle, this.hideStyle])}

        {React.Children.map(children, (item, itemIndex) => {
          const [title, content] = item.props.children;
          const newContentStyle = {
            ...style.root,
            ...content.props.style,
            ...(index === itemIndex ? this.showStyle : this.hideStyle)
          };

          return (
            <StyleRoot {...item.props}>
              {title}

              {React.cloneElement(content, {
                style: newContentStyle
              })}
            </StyleRoot>
          );
        })}
      </div>
    );
  }
}
