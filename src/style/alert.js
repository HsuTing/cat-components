'use strict';

import color, {boxShadow} from './color';

export default {
  root: {
    position: 'fixed',
    top: 'calc(50% - 80px)',
    left: 'calc(50% - 155px)',
    width: '250px',
    height: '100px',
    padding: '30px',
    background: color.white,
    boxShadow
  },

  icon: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    padding: '10px',
    cursor: 'pointer'
  }
};
