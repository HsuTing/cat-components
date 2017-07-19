'use strict';

import red from 'cat-components/lib/color/red';

export const root = {
  position: 'relative'
};

export const menu = {
  top: '34px',
  left: 'initial',
  right: '0px',
  padding: '0px',
  width: '300px',
  height: 'initial',
  border: '0px',
  background: 'rgba(0, 0, 0, 0)',
  transformOrigin: '100% 0px'
};

export const input = isError => ({
  color: isError ? red : 'initial'
});

export const errorMessages = {
  fontSize: '12px',
  color: red
};

export const iconRoot = {
  position: 'absolute',
  top: '5px',
  right: '0px',
  cursor: 'pointer'
};

export const icon = {
  width: '34px',
  height: '34px',
};
