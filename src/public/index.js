'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from 'cat-components/lib/Wrapper';
import Index from 'components/Index';

(() => {
  ReactDOM.render(
    <Wrapper>
      <Index />
    </Wrapper>,
    document.getElementById('root')
  );
})();
