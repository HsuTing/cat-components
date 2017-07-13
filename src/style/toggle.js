'use strict';

import radium from 'radium';

import blue from 'color/blue';
import lightBlue from 'color/light-blue';
import * as grey from 'color/grey';

import {boxShadow} from './style';

export default {
  root: {
    display: 'inline-block',
    width: '25px',
    height: '25px',
    color: blue,
    cursor: 'pointer'
  },

  icon: {
    width: '100%',
    height: '100%'
  },

  switch: isClicked => ({
    bar: {
      position: 'relative',
      width: '40px',
      height: '10px',
      borderRadius: '20px',
      background: isClicked ? lightBlue : grey._200_
    },

    button: {
      position: 'absolute',
      top: '-2.5px',
      left: isClicked ? 'calc(100% - 15px)' : '0px',
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      background: isClicked ? blue : grey._500_,
      boxShadow,
      animation: 'x 0.1s ease-in-out',
      animationName: radium.keyframes({
        '0%': isClicked ? {left: '0px'} : {left: 'calc(100% - 15px)'},
        '100%': isClicked ? {left: 'calc(100% - 15px)'} : {left: '0px'}
      })
    }
  })
};
