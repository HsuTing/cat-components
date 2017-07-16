'use strict';

import white from 'color/white';
import * as grey from 'color/grey';
import blueGrey from 'color/blue-grey';
import * as blue from 'color/blue';

import {boxShadow} from './style';

export default {
  root: {
    maxWidth: '300px',
    borderRadius: '5px',
    background: white,
    boxShadow,
    color: blueGrey,
    lineHeight: '30px',
    userSelect: 'none'
  },

  block: {
    padding: '10px 15px',
    border: `0.5px solid ${grey._200_}`
  },

  textBlock: {
    fontWeight: 'bold',
    textAlign: 'center'
  },

  choiceBlock: {
    display: 'flex'
  },

  choice: {
    position: 'relative',
    width: 'calc(100% / 3)',
    height: '200px',
    overflowY: 'scroll',
    textAlign: 'center',
    border: `0.5px solid ${grey._200_}`,
    cursor: 'pointer'
  },

  isChosenStyle: {
    color: blue._500_,
    background: blue._100_
  }
};
