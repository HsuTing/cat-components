'use strict';

import color, {boxShadow} from './color';

export default {
  table: {
    minWidth: '400px',
    textAlign: 'center',
    background: color.white,
    color: color.darkGrey,
    borderCollapse: 'collapse',
    boxShadow
  },

  tr: {
    border: `1px solid ${color.grey}`
  },

  th: {
    padding: '10px 15px'
  },

  td: {
    padding: '10px 15px'
  },

  trHover: {
    ':hover': {
      background: color.grey
    }
  }
};
