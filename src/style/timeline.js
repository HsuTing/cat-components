'use strict';

import * as grey from 'color/grey';

import * as layoutStyle from './../layout';

export const root = {
  margin: '15px 0px',
  display: 'grid',
  gridTemplateColumns: 'calc(50% - 5px) 10px calc(50% - 5px)',
  ...layoutStyle.tablet({
    gridTemplateColumns: '0px 10px calc(100% - 10px)',
  })
};

export const svg = {
  width: '10px',
  height: '10px'
};

export const circle = color => ({
  fill: color
});

export const bar = color => ({
  margin: '0px 4px',
  width: '2px',
  height: 'calc(100% - 3px)',
  background: color
});

export const date = type => ({
  marginTop: '4px',
  padding: type === 'left' ? '0px 15px 0px 0px' : '0px 0px 0px 15px',
  fontSize: '12px',
  textAlign: type === 'left' ? 'right' : 'left'
});

export const content = type => ({
  margin: type === 'left' ? '18px 15px 20px 0px' : '18px 0px 20px 15px',
  padding: '15px',
  minHeight: '100px',
  border: `1px solid ${grey._200_}`
});

export const hide = {
  display: 'none'
};

export const init = {
  display: 'block'
};
