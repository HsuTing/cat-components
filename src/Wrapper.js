'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

@radium
export default class Wrapper extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    const {children} = this.props;

    return (
      <div>{children}</div>
    );
  }
}
