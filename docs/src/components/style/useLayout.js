'use strict';

import * as grey from 'cat-components/lib/color/grey';
import black from 'cat-components/lib/color/black';

export const col = num => ({
  textAlign: 'center',
  lineHeight: '45px',
  color: black,
  background: num % 2 ? grey._200_ : grey._50_
});
