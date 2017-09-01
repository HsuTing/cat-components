'use strict';

import * as grey from 'cat-components/lib/color/grey';
import * as layoutStyle from 'cat-components/lib/layout';

export const root = {
  display: 'grid',
  width: '100vw',
  height: '100vh',
  gridTemplateColumns: '240px auto',
  ...layoutStyle.tablet({
    gridTemplateColumns: 'auto',
  })
};

const headerHeight = 56;
export const header = {
  padding: '0px 16px',
  width: 'calc(100% - 16px * 2)',
  height: `${headerHeight}px`,
  color: grey._600_,
  fontSize: '20px',
  lineHeight: `${headerHeight}px`,
  boxShadow: '1px 0 5px rgba(0, 0, 0, 0.7)'
};

export const menu = {
  ...layoutStyle.tablet({
    display: 'none'
  })
};

export const menuIconRoot = {
  display: 'none',
  ...layoutStyle.tablet({
    display: 'inline-block'
  })
};

export const menuIcon = {
  width: '24px',
  height: '24px',
  padding: '12px',
  cursor: 'pointer',
  transform: 'translateX(-16px)'
};

export const content = {
  padding: '50px',
  width: 'calc(100% - 50px * 2)',
  height: `calc(100vh - 50px * 2 - ${headerHeight}px)`,
  overflow: 'scroll'
};
