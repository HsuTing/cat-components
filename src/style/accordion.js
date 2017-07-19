'use strict';

import radium from 'radium';

const showStyle = {
  maxHeight: '200px',
  overflow: 'scroll'
};

const hideStyle = {
  maxHeight: '0px',
  overflow: 'hidden'
};

export const content = {
  animation: 'x 0.5s ease-in-out'
};

export const style = isClicked => ({
  ...(isClicked ? showStyle : hideStyle),
  animationName: radium.keyframes({
    '0%': isClicked ? hideStyle : showStyle,
    '100%': isClicked ? showStyle : hideStyle
  })
});
