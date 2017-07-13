'use strict';

import white from 'color/white';
import grey from 'color/grey';

import {boxShadow} from './style';

export default {
  root: {
    display: 'inline-block',
    padding: '5px 10px',
    margin: '4px 2px',
    background: white,
    borderRadius: '3px',
    border: `0.5px solid ${grey}`,
    cursor: 'pointer',
    outline: '0px',
    fontWeight: 'normal',
    ':hover': {
      boxShadow
    }
  }
};
