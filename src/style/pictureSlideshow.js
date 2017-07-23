'use strict';

import radium from 'radium';

import black from 'color/black';

export const root = {
  position: 'relative',
  width: '100%',
  height: '80vh',
  margin: '4px 2px',
  overflow: 'hidden',
  background: black
};

export const img = {
  display: 'block',
  margin: 'auto',
  width: '100%',
  height: 'initial'
};

export const item = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  background: black,
  animation: 'x 0.5s ease-in-out'
};

export const position = {
  left: {
    opacity: '0',
    transform: 'translateX(-100%)'
  },
  center: {
    opacity: '1',
    transform: 'translateX(0)'
  },
  right: {
    opacity: '0',
    transform: 'translateX(100%)'
  }
};

export const hideStyle = position => ({
  right: {
    ...position.right,
    animationName: radium.keyframes({
      '0%': position.center,
      '100%': position.right
    })
  },

  left: {
    ...position.left,
    animationName: radium.keyframes({
      '0%': position.center,
      '100%': position.left
    })
  }
});

export const showStyle = position => ({
  right: {
    ...position.center,
    animationName: radium.keyframes({
      '0%': position.left,
      '100%': position.center
    })
  },

  left: {
    ...position.center,
    animationName: radium.keyframes({
      '0%': position.right,
      '100%': position.center
    })
  }
});

export const hide = {
  display: 'none'
};
