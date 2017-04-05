'use strict';

import color, {boxShadow} from './color';

export default {
  root: {
    display: 'inline-block',
    padding: '5px 10px',
    margin: '4px 2px',
    background: color.white,
    borderRadius: '3px',
    border: `1px solid ${color.darkGrey}`,
    cursor: 'pointer',
    outline: '0px',
    fontWeight: 'normal',
    ':hover': {
      boxShadow
    }
  }
};
