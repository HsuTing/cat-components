'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Index from 'components/Index';

import Wrapper from './../Wrapper';

(() => {
  ReactDOM.render(
    <Wrapper>
      <Index />
    </Wrapper>,
    document.getElementById('root')
  );
})();
