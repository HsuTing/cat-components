'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default Component => class extends React.Component { // eslint-disable-line react/display-name
  static contextTypes = {
    zoomIn: PropTypes.func.isRequired,
    zoomOut: PropTypes.func.isRequired
  }

  render() {
    return (
      <Component {...this.state}
        {...this.props}
        {...this.context}
      />
    );
  }
};
