'use strict';

import React from 'react';
import Wrapper from 'cat-components/lib/wrapper';
import Login from 'cat-components/lib/templates/Login';

import Normalize from './../share/Normalize';

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, redux, router, ...props}) => (
  <Wrapper radiumConfig={radiumConfig}
    redux={redux}
    router={router}
    modules={{
      redux: require('redux'),
      reactRedux: require('react-redux'),
      reactRouterDom: require('react-router-dom')
    }}
  >
    <div>
      <Normalize />

      <Login {...props} />
    </div>
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
