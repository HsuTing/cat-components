'use strict';

export const tablet = (style = {}) => ({
  '@media (max-width:839px)': style
});

export const phone = (style = {}) => ({
  '@media (max-width:479px)': style
});
