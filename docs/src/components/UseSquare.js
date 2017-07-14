'use strict';

import React from 'react';
import radium from 'radium';
import Square from 'cat-components/lib/square';

import style from './style/useSquare';

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
