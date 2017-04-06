'use strict';

import color, {boxShadow} from './color';

export default {
  root: {
    position: 'relative',
    maxWidth: '400px',
    height: '5px',
    background: color.grey,
    cursor: 'pointer'
  },

  bar: width => ({
    width,
    height: '100%',
    background: color.lightBlue
  }),

  button: left => ({
    position: 'absolute',
    top: '-7px',
    left,
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: color.blue,
    boxShadow
  })
};
