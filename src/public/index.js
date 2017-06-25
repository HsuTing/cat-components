'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Index from 'components/Index';

import Wrapper from './../Wrapper';

(() => {
  ReactDOM.render(
    <Wrapper>
      <Index leng='en-us'
        defaultData={languageData}
        dirPath={languageDir}
      />
    </Wrapper>,
    document.getElementById('root')
  );
})();
