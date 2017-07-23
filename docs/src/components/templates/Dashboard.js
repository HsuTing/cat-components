'use strict';

import React from 'react';
import Wrapper from 'cat-components/lib/wrapper';
import Dashboard from 'cat-components/lib/templates/Dashboard';

import Normalize from './../share/Normalize';

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, router, ...props}) => (
  <Wrapper radiumConfig={radiumConfig}
    router={router}
    modules={{
      reactRouterDom: require('react-router-dom')
    }}
  >
    <div>
      <Normalize />

      <Dashboard {...props} />
    </div>
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
