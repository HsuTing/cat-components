'use strict';

import red from 'cat-components/lib/color/red';

export const root = {
  display: 'grid',
  gridTemplateColumns: 'auto 34px',
  padding: '0px',
  width: 'calc(100% - 1px * 2)',
  height: 'initial'
};

export const input = {
  margin: '0px',
  width: 'calc(100% - 10px * 2)',
  height: 'initial',
  border: '0px',
  ':focus': {
    border: '0px'
  }
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

export const calendar = {
  boxShadow: 'initial'
};

export const today = {
  padding: '2px 0px',
  background: red._50_,
  fontSize: '12px',
  textAlign: 'center',
  cursor: 'pointer'
};

export const errorMessages = {
  fontSize: '12px',
  color: red
};

export const icon = {
  width: '34px',
  height: '34px',
  cursor: 'pointer'
};
