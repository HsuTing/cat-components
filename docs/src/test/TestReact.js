'use strict';

import React from 'react';
import radium from 'radium';

import Wrapper from './../Wrapper';

@radium
class TestReact extends React.Component {
  render() {
    return (
      <div>test react</div>
    );
  }
}

/* eslint-disable */
export default () => (
  <Wrapper>
    <TestReact />
  </Wrapper>
);
/* eslint-enable */
