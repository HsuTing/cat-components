'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import checkAPI from 'cat-components/lib/checkAPI';

@checkAPI('FB', () => FB)
export default class UsecheckAPI extends React.Component {
  static propTypes = {
    FBCanUse: PropTypes.bool.isRequired
  }

  render() {
    const {FBCanUse} = this.props;

    return (
      <div>
        {
          FBCanUse ?
            'Can use "FB.api".' :
            'Can not use "FB.api".'
        }
      </div>
    );
  }
}
