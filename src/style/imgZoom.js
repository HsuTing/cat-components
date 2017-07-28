'use strict';

import white from 'color/white';

export const rootZoom = [{
  background: 'rgba(0, 0, 0, 0)'
}, {
  background: 'rgba(0, 0, 0, 0.8)'
}];
export const root = {
  display: 'flex',
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100vw',
  height: '100vh',
  animation: 'x 0.3s ease-in-out',
  cursor: 'pointer',
  zIndex: '99'
};

export const imgBackground = {
  display: 'flex',
  width: '80%',
  height: '80%',
  maxWidth: '1920px',
  maxHeight: '1080px',
  margin: 'auto'
};

export const img = {
  margin: '0px auto',
  background: white,
  animation: 'x 0.3s ease-in-out'
};
