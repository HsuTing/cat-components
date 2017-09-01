'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Login from './../../components/templates/login/Login';
import router from './../../utils/router';
import redux from './../../utils/redux';

(() => {
  ReactDOM.render(
    <Login redux={redux}
      router={router}
    />,
    document.getElementById('root')
  );
})();
