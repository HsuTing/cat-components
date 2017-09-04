'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Index from './../components/index/Index';
import router from './../utils/router';
import redux from './../utils/redux';

(() => {
  ReactDOM.render(
    <Index data={data}
      defaultData={languageData}
      basename={languageDir}
      redux={redux}
      router={router}
    />,
    document.getElementById('root')
  );
})();
