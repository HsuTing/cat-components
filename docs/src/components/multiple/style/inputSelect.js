'use strict';

import * as grey from 'cat-components/lib/color/grey';
import white from 'cat-components/lib/color/white';
import blue from 'cat-components/lib/color/blue';

export const menuShowStyle = {
  zIndex: '99',
  transform: 'scale(1, 1)',
  opacity: '1'
};

export const menuHideStyle = {
  zIndex: '99',
  transform: 'scale(1, 0)',
  opacity: '0'
};

export const root = {
  display: 'grid',
  gridTemplateColumns: 'auto 32px',
  padding: '0px',
  width: 'calc(100% - 1px * 2)',
  height: 'initial',
  cursor: 'pointer',
  overflow: 'hidden'
};

export const input = {
  margin: '0px',
  padding: '0px 10px',
  width: 'calc(100% - 10px * 2)',
  border: '0px',
  cursor: 'pointer',
  ':focus': {
    border: '0px'
  }
};

export const menu = {
  top: '39px',
  padding: '0px',
  marginBottom: '50px',
  width: 'calc(100% - 2px)',
  height: 'auto',
  border: '0px',
  boxShadow: 'rgba(0, 0, 0, 0.3) 1px 0px 6px'
};

export const icon = {
  height: '32px',
  width: '32px'
};

export const option = (isLast, isSelected) => ({
  fontSize: '18px',
  linetHeight: '22px',
  padding: '10px 20px',
  cursor: 'pointer',
  userSelect: 'none',
  ...(isLast ? {} : {
    borderBottom: `1px solid ${grey._200_}`
  }),
  ...(!isSelected ? {} : {
    color: white,
    background: blue
  })
});
