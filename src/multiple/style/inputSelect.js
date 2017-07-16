'use strict';

import radium from 'radium';
import * as grey from 'cat-components/lib/color/grey';
import black from 'cat-components/lib/color/black';
import white from 'cat-components/lib/color/white';
import blue from 'cat-components/lib/color/blue';

const menuShowStyle = {
  zIndex: '99',
  transform: 'scale(1, 1)',
  opacity: '1'
};

const menuHideStyle = {
  zIndex: '99',
  transform: 'scale(1, 0)',
  opacity: '0'
};

export default {
  root: {
    cursor: 'pointer'
  },

  input: isSelected => ({
    margin: '0px',
    width: 'calc(100% - 56px)',
    border: `0.5px solid ${grey._500_}`,
    borderRadius: '0px',
    color: isSelected ? grey._500_ : black,
    userSelect: 'none'
  }),

  menu: isShown => ({
    top: '39px',
    padding: '0px',
    marginBottom: '50px',
    width: 'calc(100% - 2px)',
    height: 'auto',
    border: '0px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 1px 0px 6px',
    ...(isShown ? menuShowStyle : menuHideStyle),
    animationName: radium.keyframes({
      '0%': isShown ? menuHideStyle : menuShowStyle,
      '100%': isShown ? menuShowStyle : menuHideStyle
    })
  }),

  icon: {
    height: '34px',
    width: '34px',
    color: white,
    background: grey._500_
  },

  option: (isLast, isSelected) => ({
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
  })
};
