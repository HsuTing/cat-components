'use strict';

import red from 'cat-components/lib/color/red';

export default {
  root: {
    position: 'relative'
  },

  menu: {
    top: '-260px',
    left: 'initial',
    right: '0px',
    padding: '0px',
    width: '300px',
    height: 'initial',
    border: '0px',
    background: 'rgba(0, 0, 0, 0)',
    transformOrigin: '100% 100%'
  },

  input: isError => ({
    color: isError ? red : 'initial'
  }),

  errorMessages: {
    fontSize: '12px',
    color: red
  },

  iconRoot: {
    position: 'absolute',
    top: '5px',
    right: '0px',
    cursor: 'pointer'
  },

  icon: {
    width: '34px',
    height: '34px',
  }
};
