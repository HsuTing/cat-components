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

export const col = (num = 0, padding = {}) => ({
  display: num === 0 ? 'none' : 'block',
  width: `calc(100% / 12 * ${num > 12 ? 12 : num} - (${countWidth(padding)}))`,
  padding: countPadding(padding)
});
