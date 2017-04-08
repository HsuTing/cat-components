'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import style from 'style/button';

@radium
export default class Button extends React.Component {
  static propTypes = {
    link: PropTypes.string,
    target: PropTypes.string
  }

  render() {
    const {link, target, ...props} = this.props;

    if(link)
      return (
        <a href={link}
           target={target ? target : '_self'}
        >
          <button {...props}
                  style={[style.root, props.style]}
          ></button>
        </a>
      );

    return (
      <button {...props}
              style={[style.root, props.style]}
      ></button>
    );
  }
}
