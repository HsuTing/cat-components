'use strict';

import React from 'react';

import Wrapper from './../Wrapper';

export default (Component, props) => { // eslint-disable-line react/display-name
  return (
    <Wrapper {...props}>
      {Component}
    </Wrapper>
  );
};
