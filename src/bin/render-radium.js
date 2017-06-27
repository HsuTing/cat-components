'use strict';

import React from 'react';

import Wrapper from './../Wrapper';

export default (Component, {radiumConfig}) => ( // eslint-disable-line react/display-name
  <Wrapper radiumConfig={radiumConfig}>
    {Component}
  </Wrapper>
);
