'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

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
          <img {...props} />
        </a>
      );

    return (
      <img {...props} />
    );
  }
}
