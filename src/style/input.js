'use strict';

import color from './color';

export default {
  input: {
    margin: '5px 0px',
    padding: '5px 10px',
    width: 'calc(100% - 10px * 2 - 1px * 2)',
    height: '22px',
    lineHeight: '22px',
    fontSize: '18px',
    letterSpacing: '1.2px',
    border: `solid 1px ${color.black}`,
    borderRadius: '3px',
    color: 'black',
    outline: '0px',
    resize: 'none',
    ':focus': {
      border: `solid 1px ${color.blue}`
    }
  },

  textarea: {
    height: '100px'
  }
};
