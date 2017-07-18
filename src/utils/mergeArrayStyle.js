'use strict';

export default styles => {
  if(styles instanceof Array) {
    return styles.reduce((output, style) => {
      return {
        ...output,
        ...style
      };
    }, {});
  }

  return styles;
};
