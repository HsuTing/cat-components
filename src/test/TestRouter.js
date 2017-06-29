'use strict';

import React from 'react';
import radium from 'radium';
import {Route} from 'react-router-dom';

import Wrapper from './../Wrapper';

@radium
class TestRouter extends React.Component {
  render() {
    return (
      <div>
        <Route path='/'
          component={() => <div>router render index</div>}
          exact
        />
        <Route path='/about/'
          component={() => <div>router render about</div>}
          exact
        />
      </div>
    );
  }
}

/* eslint-disable */
export default ({router}) => (
  <Wrapper router={router}>
    <TestRouter />
  </Wrapper>
);
/* eslint-enable */
