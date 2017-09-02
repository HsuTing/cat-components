'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './../../components/templates/dashboard/Dashboard';
import router from './../../utils/router';

(() => {
  ReactDOM.render(
    <Dashboard router={{
      ...router,
      basename: `${router.basename}dashboard/`
    }}
    />,
    document.getElementById('root')
  );
})();
