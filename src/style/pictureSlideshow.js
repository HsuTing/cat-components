'use strict';

import radium from 'radium';

import black from 'color/black';

export default {
  root: {
    position: 'relative',
    width: '100%',
    height: '80vh',
    margin: '4px 2px',
    overflow: 'hidden',
    background: black
  },

  img: {
    display: 'block',
    margin: 'auto',
    width: '100%',
    height: 'initial'
  },

  item: {
    display: 'flex',
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    background: black,
    animation: 'x 1s ease-in-out'
  },

  hideStyle: {
    right: {
      left: '100%',
      animationName: radium.keyframes({
        '0%': {left: '0px'},
        '100%': {left: '100%'}
      })
    },

    left: {
      left: '-100%',
      animationName: radium.keyframes({
        '0%': {left: '0px'},
        '100%': {left: '-100%'}
      })
    }
  },

  showStyle: {
    right: {
      left: '0px',
      animationName: radium.keyframes({
        '0%': {left: '-100%'},
        '100%': {left: '0px'}
      })
    },

    left: {
      left: '0px',
      animationName: radium.keyframes({
        '0%': {left: '100%'},
        '100%': {left: '0px'}
      })
    }
  },

  hide: {
    display: 'none'
  }
};
