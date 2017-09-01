'use strict';

import red from 'cat-components/lib/color/red';

export const root = {
  height: 'initial'
};

export const removeIcon = {
  margin: '0px 0px 0px 10px'
};

export const input = {
  padding: '0px',
  margin: '4px 2px',
  width: 'calc(100% - 2px * 2)',
  height: 'initial',
  border: '0px',
  ':focus': {
    border: '0px'
  }
};

export const errorMessages = {
  fontSize: '12px',
  color: red
};
