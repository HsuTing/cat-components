'use strict';

import white from 'color/white';
import blueGrey from 'color/blue-grey';

export const showStyle = {
  zIndex: '99',
  transform: 'scale(1)',
  opacity: '1'
};

export const hideStyle = {
  zIndex: '99',
  transform: 'scale(0)',
  opacity: '0'
};

export const root = {
  position: 'relative'
};

export const init = {
  animation: ''
};

export const menu = {
  position: 'absolute',
  top: '45px',
  left: '0px',
  padding: '10px',
  width: '200px',
  height: '200px',
  transformOrigin: '0px 0px',
  background: white,
  border: `1px solid ${blueGrey}`,
  animation: 'x 0.5s ease-in-out'
};

export const hide = {
  zIndex: '-1'
};
