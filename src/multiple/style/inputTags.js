'use strict';

import red from 'cat-components/lib/color/red';

export default {
  root: {
    height: 'initial'
  },

  removeIcon: {
    margin: '0px 0px 0px 10px'
  },

  input: {
    padding: '0px',
    margin: '4px 2px',
    width: 'calc(100% - 2px * 2)',
    height: 'initial',
    border: '0px',
    ':focus': {
      border: '0px'
    }
  },

  errorMessages: {
    fontSize: '12px',
    color: red
  }
};
