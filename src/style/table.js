'use strict';

import white from 'color/white';
import * as grey from 'color/grey';

import {boxShadow} from './style';

export const table = {
  minWidth: '400px',
  textAlign: 'center',
  background: white,
  color: grey._500_,
  borderCollapse: 'collapse',
  boxShadow
};

export const tr = {
  border: `1px solid ${grey._200_}`
};

export const th = {
  padding: '10px 15px'
};

export const td = {
  padding: '10px 15px'
};

export const trHover = {
  ':hover': {
    background: grey._200_
  }
};
