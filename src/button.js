'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import * as style from './style/button';

export const buttonStyle = style;

@radium
export default class Button extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    link: PropTypes.string,
    target: PropTypes.string
  }

  render() {
    const {link, target, style: propsStyle, ...props} = this.props;

    if(link) {
      return (
        <a href={link}
          target={target ? target : '_self'}
        >
          <button {...props}
            style={[style.root, propsStyle]}
          ></button>
        </a>
      );
    }

    return (
      <button {...props}
        style={[style.root, propsStyle]}
      ></button>
    );
  }
}
