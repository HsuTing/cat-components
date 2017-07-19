'use strict';

import {boxShadow} from 'cat-components/lib/style/style';
import * as grey from 'cat-components/lib/color/grey';
import white from 'cat-components/lib/color/white';
import blue from 'cat-components/lib/color/blue';

export const root = {
  margin: '30px 10%'
};

export const block = {
  margin: '40px 0px',
  padding: '30px',
  border: `1px solid ${grey._200_}`,
  borderRadius: '5px'
};

export const titleRoot = {
  height: '80px'
};

export const title = {
  float: 'left'
};

export const icon = {
  marginRight: '20px',
  height: '70px',
  float: 'left'
};

export const statusImage = {
  margin: '4px 2px 30px'
};

export const arrowUpward = {
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  padding: '10px',
  color: white,
  cursor: 'pointer',
  background: blue,
  borderRadius: '50%',
  boxShadow
};
