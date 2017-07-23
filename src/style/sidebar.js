'use strict';

import white from 'color/white';

export const showStyle = {
  left: '0px',
  width: '100vw',
  background: 'rgba(0, 0, 0, 0.2)'
};

export const hideStyle = {
  left: '-250px',
  width: 'calc(100vw + 250px)',
  background: 'rgba(0, 0, 0, 0)'
};

export const root = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100vw',
  height: '100vh',
  animation: 'x 0.5s ease-in-out'
};

export const background = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  cursor: 'pointer'
};

export const menu = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '250px',
  height: '100%',
  background: white
};
