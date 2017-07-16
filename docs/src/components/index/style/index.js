'use strict';

import {boxShadow} from 'cat-components/lib/style/style';
import * as grey from 'cat-components/lib/color/grey';
import white from 'cat-components/lib/color/white';
import blue from 'cat-components/lib/color/blue';

export default {
  root: {
    margin: '30px 10%'
  },

  block: {
    margin: '40px 0px',
    padding: '30px',
    border: `1px solid ${grey._200_}`,
    borderRadius: '5px'
  },

  titleRoot: {
    height: '80px'
  },

  title: {
    float: 'left'
  },

  icon: {
    marginRight: '20px',
    height: '70px',
    float: 'left'
  },

  statusImage: {
    margin: '4px 2px 30px'
  },

  arrowUpward: {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    padding: '10px',
    color: white,
    cursor: 'pointer',
    background: blue,
    borderRadius: '50%',
    boxShadow
  }
};
