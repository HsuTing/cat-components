'use strict';

import React from 'react';
import radium from 'radium';
import * as reactRouterDom from 'react-router-dom';
import {Route} from 'react-router-dom';
import Wrapper from 'cat-components/lib/wrapper';

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
  <Wrapper router={router}
    modules={{reactRouterDom}}
  >
    <TestRouter />
  </Wrapper>
);
/* eslint-enable */
