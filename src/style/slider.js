'use strict';

import * as grey from 'color/grey';
import blue from 'color/blue';
import lightBlue from 'color/light-blue';

import {boxShadow} from './style';

export const root = {
  position: 'relative',
  maxWidth: '400px',
  height: '5px',
  background: grey._200_,
  cursor: 'pointer',
  userSelect: 'none'
};

export const bar = width => ({
  width,
  height: '100%',
  background: lightBlue
});

export const button = left => ({
  position: 'absolute',
  top: '-7px',
  left,
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: blue,
  boxShadow
});
