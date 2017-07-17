'use strict';

import radium from 'radium';

import white from 'color/white';
import blueGrey from 'color/blue-grey';

const showStyle = {
  zIndex: '99',
  transform: 'scale(1)',
  opacity: '1'
};

const hideStyle = {
  zIndex: '99',
  transform: 'scale(0)',
  opacity: '0'
};

export default {
  root: {
    position: 'relative'
  },

  init: {
    animation: ''
  },

  menu: isShown => ({
    position: 'absolute',
    top: '45px',
    left: '0px',
    padding: '10px',
    width: '200px',
    height: '200px',
    transformOrigin: '0px 0px',
    background: white,
    border: `1px solid ${blueGrey}`,
    animation: 'x 0.5s ease-in-out',
    ...(isShown ? showStyle : hideStyle),
    animationName: radium.keyframes({
      '0%': isShown ? hideStyle : showStyle,
      '100%': isShown ? showStyle : hideStyle
    })
  }),

  hide: {
    zIndex: '-1'
  }
};
