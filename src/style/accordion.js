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

export default {
  content: {
    animation: 'x 0.5s ease-in-out'
  },

  showStyle: Object.assign({}, showStyle, {
    animationName: radium.keyframes({
      '0%': hideStyle,
      '100%': showStyle
    })
  }),

  hideStyle: Object.assign({}, hideStyle, {
    animationName: radium.keyframes({
      '0%': showStyle,
      '100%': hideStyle
    })
  })
}
