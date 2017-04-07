'use strict';

import React from 'react';
import radium from 'radium';

import Sidebar from './../Sidebar';

@radium
export default class UseSidebar extends React.Component {
  render() {
    return (
      <Sidebar />
    );
  }
}
