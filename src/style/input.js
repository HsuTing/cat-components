'use strict';

import black from 'color/black';
import blue from 'color/blue';

export const input = {
  margin: '5px 0px',
  padding: '5px 10px',
  width: 'calc(100% - 10px * 2 - 1px * 2)',
  height: '22px',
  lineHeight: '22px',
  fontSize: '18px',
  letterSpacing: '1.2px',
  border: `solid 1px ${black}`,
  borderRadius: '3px',
  color: 'black',
  outline: '0px',
  resize: 'none',
  ':focus': {
    border: `solid 1px ${blue}`
  }
};

export const textarea = {
  height: '100px'
};
