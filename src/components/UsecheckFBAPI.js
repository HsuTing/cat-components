'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import checkFBAPI from './../checkFBAPI';

@checkFBAPI
export default class UsecheckFBAPI extends React.Component {
  static propTypes = {
    FBAPICanUse: PropTypes.bool.isRequired
  }

  render() {
    return (
      <div>
        {this.props.FBAPICanUse ? 'Can use "FB.api".' : 'Can not use "FB.api."'}
      </div>
    );
  }
}
