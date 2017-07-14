'use strict';

import * as grey from 'color/grey';
import black from 'color/black';

export default {
  col: num => ({
    textAlign: 'center',
    lineHeight: '45px',
    color: black,
    background: num % 2 ? grey._200_ : grey._50_
  })
};
