'use strict';

import red from 'cat-components/lib/color/red';
import * as layoutStyle from 'cat-components/lib/layout';

export const root = {
  display: 'grid',
  width: '100vw',
  height: '100vh',
  gridTemplateColumns: '30% auto 30%',
  ...layoutStyle.tablet({
    gridTemplateColumns: '10% auto 10%'
  })
};

export const content = {
  width: '100%',
  maxWidth: '400px',
  margin: '50px auto'
};

export const iconRoot = {
  textAlign: 'center'
};

export const inputRoot = {
  margin: '10px 0px'
};

export const title = {
  margin: '5px 0px'
};

export const error = {
  margin: '5px 0px',
  fontSize: '12px',
  color: red
};

export const buttonRoot = {
  textAlign: 'center'
};

export const register = {
  fontSize: '12px'
};
