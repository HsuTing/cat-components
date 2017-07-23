'use strict';

import React from 'react';
import radium from 'radium';
import Img from 'cat-components/lib/img';

import * as style from './style/useImg';

@radium
export default class UseImg extends React.Component {
  render() {
    return (
      <div>
        <Img src='https://hsuting.github.io/img/icon.svg' />

        <Img style={style.div}
          src='https://hsuting.github.io/img/icon.svg'
          type='div'
        />
      </div>
    );
  }
}
