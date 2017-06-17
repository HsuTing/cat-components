'use strict';

import color from 'style/color';

export default {
  default: {
    width: 'calc(100% / 7 - 2px - 5px * 2)',
    padding: '5px',
    border: `0.5px solid ${color.grey}`,
    color: color.darkGrey,
    textAlign: 'right'
  },

  notThisMonth: {
    color: color.grey
  },

  today: {
    padding: '2px',
    color: color.white,
    background: color.red,
    borderRadius: '50%'
  }
};
