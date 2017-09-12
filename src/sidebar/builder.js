'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default Component => class extends React.Component { // eslint-disable-line react/display-name
  static contextTypes = {
    sidebar: PropTypes.func.isRequired,
    hideSidebar: PropTypes.func.isRequired
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
