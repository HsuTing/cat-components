'use strict';

const countPadding = ({
  top,
  right,
  bottom,
  left
}) => `${top || 0}px ${right || 0}px ${bottom || 0}px ${left || 0}px`;

const countWidth = ({
  right,
  left
}) => `${right || 0}px + ${left || 0}px`;

export const grid = (padding = {}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: `calc(100% - (${countWidth(padding)}))`,
  padding: countPadding(padding)
});

const col_max = 12;
export const col = (num = 0, padding = {}) => ({
  display: num === 0 ? 'none' : 'block',
  width: `calc(100% / ${col_max} * ${num > col_max ? col_max : num} - (${countWidth(padding)}))`,
  padding: countPadding(padding)
});

const col_tablet_max = 8;
export const col_tablet = (num, padding = {}) => ({
  '@media (max-width:839px)': {
    display: num === 0 ? 'none' : 'block',
    width: `calc(100% / ${col_tablet_max} * ${num > col_tablet_max ? col_tablet_max : num} - (${countWidth(padding)}))`,
    padding: countPadding(padding)
  }
});

const col_phone_max = 4;
export const col_phone = (num, padding = {}) => ({
  '@media (max-width:479px)': {
    display: num === 0 ? 'none' : 'block',
    width: `calc(100% / ${col_phone_max} * ${num > col_phone_max ? col_phone_max : num} - (${countWidth(padding)}))`,
    padding: countPadding(padding)
  }
});
