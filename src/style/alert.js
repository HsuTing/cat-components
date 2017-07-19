'use strict';

import white from 'color/white';

import {boxShadow} from './style';

export const showStyle = {
  transform: 'scale(1)'
};

export const hideStyle = {
  transform: 'scale(0)'
};

export const root = {
  position: 'fixed',
  top: 'calc(50% - 80px)',
  left: 'calc(50% - 155px)',
  width: '250px',
  height: '100px',
  padding: '30px',
  background: white,
  boxShadow,
  transformOrigin: '0px 0px',
  animation: 'x 0.5s ease-in-out'
};

export const icon = {
  position: 'absolute',
  top: '5px',
  right: '5px',
  padding: '10px',
  cursor: 'pointer'
};
