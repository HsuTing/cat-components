'use strict';

import React from 'react';
import radium from 'radium';

import Loading from './../Loading';

@radium
export default class UseLoading extends React.Component {
  render() {
    return (
      <Loading />
    );
  }
}
