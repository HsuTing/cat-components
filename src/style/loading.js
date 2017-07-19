'use strict';

import radium from 'radium';

import blue from 'color/blue';

export const root = outerRadius => ({
  width: `${(outerRadius) * 2}px`,
  height: `${(outerRadius) * 2}px`
});

export const animtion = {
  animation: 'x 1s ease-in-out infinite',
  animationName: radium.keyframes({
    '0%': {transform: 'rotate(0deg)'},
    '100%': {transform: 'rotate(360deg)'}
  })
};

export const g = outerRadius => ({
  transform: `translate(${outerRadius}px, ${outerRadius}px)`
});

export const circle = {
  fill: blue
};
