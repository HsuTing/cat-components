'use strict';

import white from 'color/white';
import * as grey from 'color/grey';
import blueGrey from 'color/blue-grey';
import * as blue from 'color/blue';

import {boxShadow} from './style';

export const root = {
  maxWidth: '300px',
  borderRadius: '5px',
  background: white,
  boxShadow,
  color: blueGrey,
  lineHeight: '30px',
  userSelect: 'none'
};

export const block = {
  padding: '10px 15px',
  border: `1px solid ${grey._200_}`
};

export const textBlock = {
  fontWeight: 'bold',
  textAlign: 'center'
};

export const choiceBlock = {
  display: 'grid',
  gridTemplateColumns: 'calc(100% / 3) calc(100% / 3) calc(100% / 3)'
};

export const choice = {
  position: 'relative',
  height: '200px',
  overflowY: 'scroll',
  textAlign: 'center',
  border: `1px solid ${grey._200_}`,
  cursor: 'pointer'
};

export const isChosenStyle = {
  color: blue._500_,
  background: blue._100_
};
