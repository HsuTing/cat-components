'use strict';

import * as grey from 'cat-components/lib/color/grey';
import black from 'cat-components/lib/color/black';
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
  cursor: 'pointer'
};

export const input = isSelected => ({
  margin: '0px',
  width: 'calc(100% - 56px)',
  border: `0.5px solid ${grey._500_}`,
  borderRadius: '0px',
  color: isSelected ? grey._500_ : black,
  userSelect: 'none'
});

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
  height: '34px',
  width: '34px',
  color: white,
  background: grey._500_
};

export const option = (isLast, isSelected) => ({
  fontSize: '18px',
  linetHeight: '22px',
  padding: '10px 20px',
  cursor: 'pointer',
  userSelect: 'none',
  ...(isLast ? {} : {
    borderBottom: `0.5px solid ${grey._200_}`
  }),
  ...(!isSelected ? {} : {
    color: white,
    background: blue
  })
});
