'use strict';

import white from 'color/white';
import * as grey from 'color/grey';

import {boxShadow} from './style';

export default {
  table: {
    minWidth: '400px',
    textAlign: 'center',
    background: white,
    color: grey._500_,
    borderCollapse: 'collapse',
    boxShadow
  },

  tr: {
    border: `1px solid ${grey._200_}`
  },

  th: {
    padding: '10px 15px'
  },

  td: {
    padding: '10px 15px'
  },

  trHover: {
    ':hover': {
      background: grey._200_
    }
  }
};
