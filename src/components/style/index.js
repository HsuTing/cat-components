'use strict';

import color, {boxShadow} from 'style/color';

export default {
  root: {
    margin: '30px 10%'
  },

  block: {
    margin: '40px 0px',
    padding: '30px',
    border: `1px solid ${color.grey}`,
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

  npm: {
    margin: '4px 2px 30px'
  },

  arrowUpward: {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    padding: '10px',
    color: color.white,
    cursor: 'pointer',
    background: color.blue,
    borderRadius: '50%',
    boxShadow
  }
};
