'use strict';

import radium from 'radium';

import color, {boxShadow} from './color';

const showStyle = {
  transform: 'scale(1)'
};

const hideStyle = {
  transform: 'scale(0)'
};

export default {
  root: isShown => ({
    position: 'fixed',
    top: 'calc(50% - 80px)',
    left: 'calc(50% - 155px)',
    width: '250px',
    height: '100px',
    padding: '30px',
    background: color.white,
    boxShadow,
    transformOrigin: '0px 0px',
    animation: 'x 0.5s ease-in-out',
    animationName: radium.keyframes({
      '0%': isShown ? hideStyle : showStyle,
      '100%': isShown ? showStyle : hideStyle
    }),
    ...(isShown ? showStyle : hideStyle)
  }),

  icon: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    padding: '10px',
    cursor: 'pointer'
  }
};
