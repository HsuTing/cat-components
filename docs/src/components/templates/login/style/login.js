'use strict';

import * as layoutStyle from 'cat-components/lib/layout';

export const root = {
  display: 'grid',
  width: '100vw',
  gridTemplateColumns: '30% auto 30%',
  ...layoutStyle.tablet({
    gridTemplateColumns: '10% auto 10%'
  })
};

export const content = {
  width: 'calc(100% - 5px * 2)',
  height: '100%',
  maxWidth: '400px',
  margin: '50px auto',
  padding: '0px 5px',
  overflowX: 'hidden'
};

export const iconRoot = {
  textAlign: 'center'
};
