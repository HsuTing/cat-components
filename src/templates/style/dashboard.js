'use strict';

import * as blue from 'cat-components/lib/color/blue';
import * as blueGrey from 'cat-components/lib/color/blue-grey';
import * as grey from 'cat-components/lib/color/grey';
import cyan from 'cat-components/lib/color/cyan';
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

const menuImgHight = '45px';
export const menu = {
  root: {
    width: '100%',
    height: '100vh',
    color: blueGrey._50_,
    background: blueGrey._800_,
    overflowY: 'scroll'
  },

  tabletRoot: {
    ...layoutStyle.tablet({
      display: 'none'
    })
  },

  header: {
    display: 'grid',
    gridTemplateRows: `auto ${menuImgHight} 32px`,
    height: '120px',
    padding: '16px',
    background: blueGrey._900_
  },

  imgBackground: {
    width: menuImgHight,
    height: menuImgHight,
    borderRadius: '50%',
    background: blue._200_
  },

  img: {
    width: '100%',
    height: '100%'
  },

  email: {
    margin: '5px 0px',
    fontSize: '12px'
  },

  linkRoot: {
    color: blueGrey._400_
  },

  link: match => ({
    display: 'block',
    width: 'calc(100% - 20px * 2)',
    padding: '20px',
    fontSize: '16px',
    textAlign: 'center',
    background: match ? cyan : 'initial',
    color: match ? blueGrey._800_ : blueGrey._400_,
    ':hover': {
      background: cyan,
      color: blueGrey._800_
    }
  })
};

export const header = {
  padding: '0px 16px',
  width: 'calc(100% - 16px * 2)',
  height: '56px',
  color: grey._600_,
  fontSize: '20px',
  lineHeight: '56px',
  boxShadow: '1px 0 5px rgba(0, 0, 0, 0.7)'
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
