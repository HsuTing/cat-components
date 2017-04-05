'use strict';

import color from './color';

export default {
  root: {
    maxWidth: '300px',
    borderRadius: '5px',
    background: color.white,
    boxShadow: '1px 0 5px rgba(0,0,0,0.4)',
    color: color.darkGrey,
    lineHeight: '30px'
  },

  block: {
    padding: '10px 15px',
    border: `1px solid ${color.grey}`
  },

  textBlock: {
    fontWeight: 'bold',
    textAlign: 'center'
  },

  choiceBlock: {
    display: 'flex'
  },

  choice: {
    width: 'calc(100% / 3)',
    height: '200px',
    overflowY: 'scroll',
    textAlign: 'center',
    border: `1px solid ${color.grey}`,
    cursor: 'pointer'
  },

  isChosenStyle: {
    color: color.blue,
    background: color.lightBlue
  }
};