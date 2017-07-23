'use strict';

import radium from 'radium';
import red from 'cat-components/lib/color/red';
import * as layoutStyle from 'cat-components/lib/layout';

export const root = {
  display: 'grid',
  width: '100vw',
  gridTemplateColumns: '30% auto 30%',
  ...layoutStyle.tablet({
    gridTemplateColumns: '10% auto 10%'
  })
};

export const content = {
  width: 'calc(100% - 5px * 2)',
  height: '100%',
  maxWidth: '400px',
  margin: '50px auto',
  padding: '0px 5px',
  overflowX: 'hidden'
};

export const iconRoot = {
  textAlign: 'center'
};

export const field = {
  animation: 'x 0.5s ease-in-out',
  animationName: radium.keyframes({
    '0%': {
      opacity: '0',
      transform: 'translate(-100%, 0)',
      overflow: 'hidde'
    },

    '100%': {
      opacity: '1',
      transfrom: 'translate(0, 0)'
    }
  })
};

export const inputRoot = {
  margin: '10px 0px'
};

export const title = {
  margin: '5px 0px'
};

export const error = {
  margin: '5px 0px',
  fontSize: '12px',
  color: red
};

export const buttonRoot = {
  textAlign: 'center'
};

export const link = {
  padding: '5px 10px',
  fontSize: '12px'
};
