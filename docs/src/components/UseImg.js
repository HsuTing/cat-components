'use strict';

import React from 'react';
import radium from 'radium';

import Img from './../Img';

@radium
export default class UseImg extends React.Component {
  render() {
    return (
      <Img src='https://hsuting.github.io/img/icon.svg' />
    );
  }
}
