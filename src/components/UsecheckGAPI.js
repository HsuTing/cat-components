'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import checkGAPI from './../checkGAPI';

@checkGAPI
export default class UsecheckGAPI extends React.Component {
  static propTypes = {
    GAPICanUse: PropTypes.bool.isRequired
  }

  render() {
    return (
      <div>
        {this.props.GAPICanUse ? 'Can use "gapi".' : 'Can not use "gapi."'}
      </div>
    );
  }
}
