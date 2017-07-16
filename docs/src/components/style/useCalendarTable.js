'use strict';

import * as grey from 'cat-components/lib/color/grey';
import red from 'cat-components/lib/color/red';
import white from 'cat-components/lib/color/white';

export default {
  default: {
    width: 'calc(100% / 7 - 2px - 5px * 2)',
    padding: '5px',
    border: `0.5px solid ${grey._200_}`,
    color: grey._500_,
    textAlign: 'right'
  },

  notThisMonth: {
    color: grey._200_
  },

  today: {
    padding: '2px',
    color: white,
    background: red,
    borderRadius: '50%'
  }
};
