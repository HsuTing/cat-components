'use strict';

import white from 'color/white';

export const root = isZoom => ({
  display: 'grid',
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100vw',
  height: '100vh',
  background: isZoom ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)',
  cursor: 'pointer',
  zIndex: '99'
});

export const imgBackground = {
  display: 'grid',
  width: '80%',
  height: '80%',
  maxWidth: '1920px',
  maxHeight: '1080px',
  margin: 'auto'
};

export const img = {
  display: 'block',
  margin: 'auto',
  background: white,
  animation: 'x 0.5s ease-in-out'
};
