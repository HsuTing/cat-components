'use strict';

import * as blue from 'cat-components/lib/color/blue';
import * as blueGrey from 'cat-components/lib/color/blue-grey';
import cyan from 'cat-components/lib/color/cyan';

const menuImgHight = '45px';
export const root = {
  width: '100%',
  height: '100vh',
  color: blueGrey._50_,
  background: blueGrey._800_,
  overflowY: 'scroll'
};

export const header = {
  display: 'grid',
  gridTemplateRows: `auto ${menuImgHight} 32px`,
  height: '120px',
  padding: '16px',
  background: blueGrey._900_
};

export const imgBackground = {
  width: menuImgHight,
  height: menuImgHight,
  borderRadius: '50%',
  background: blue._200_
};

export const img = {
  width: '100%',
  height: '100%'
};

export const email = {
  margin: '5px 0px',
  fontSize: '12px'
};

export const linkRoot = {
  color: blueGrey._400_
};

export const link = match => ({
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
});
