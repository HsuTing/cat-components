'use strict';

import radium from 'radium';

import color, {boxShadow} from './color';

export default {
  root: {
    display: 'inline-block',
    width: '25px',
    height: '25px',
    color: color.blue,
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
      background: isClicked ? color.lightBlue : color.grey
    },

    button: {
      position: 'absolute',
      top: '-2.5px',
      left: isClicked ? 'calc(100% - 15px)' : '0px',
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      background: isClicked ? color.blue : color.darkGrey,
      boxShadow,
      animation: 'x 0.1s ease-in-out',
      animationName: radium.keyframes({
        '0%': isClicked ? {left: '0px'} : {left: 'calc(100% - 15px)'},
        '100%': isClicked ? {left: 'calc(100% - 15px)'} : {left: '0px'}
      })
    }
  })
};
