'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './../../components/templates/Dashboard';

const router = {
  isServer: false,
  basename: (
    process.env.NODE_ENV === 'production' ?
      '/cat-components/dashboard/' :
      '/cat-components/docs/dashboard/'
  )
};

(() => {
  ReactDOM.render(
    <Dashboard router={router} />,
    document.getElementById('root')
  );
})();
