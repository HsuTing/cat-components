'use strict';

import React from 'react';
import radium from 'radium';

import style from 'componentsStyle/useSquare';

import Square from './../Square';

@radium
export default class UseSquare extends React.Component {
  render() {
    return (
      <Square>
        <div style={style.root} />
      </Square>
    );
  }
}
