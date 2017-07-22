'use strict';

import React from 'react';
import Wrapper from 'cat-components/lib/wrapper';
import LoginComponent from 'cat-components/lib/templates/Login';

import Normalize from './../share/Normalize';

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, redux, ...props}) => (
  <Wrapper radiumConfig={radiumConfig}
    modules={{
      redux: require('redux'),
      reactRedux: require('react-redux')
    }}
    redux={redux}
  >
    <div>
      <Normalize />

      <LoginComponent {...props} />
    </div>
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
