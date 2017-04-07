'use strict';

import radium from 'radium';

import color from './color';

const showStyle = {
  left: '0px',
  width: '100vw',
  background: 'rgba(0, 0, 0, 0.2)'
};

const hideStyle = {
  left: '-250px',
  width: 'calc(100vw + 250px)',
  background: 'rgba(0, 0, 0, 0)'
};

export default {
  root: isShown => Object.assign({
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    animation: 'x 1s ease-in-out',
    animationName: radium.keyframes({
      '0%': isShown ? hideStyle : showStyle,
      '100%': isShown ? showStyle : hideStyle
    })
  }, isShown ? showStyle : hideStyle),

  background: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    cursor: 'pointer'
  },

  menu: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '250px',
    height: '100%',
    background: color.white
  }
};
