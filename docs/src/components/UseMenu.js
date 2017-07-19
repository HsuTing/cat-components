'use strict';

import React from 'react';
import radium from 'radium';
import MenuIcon from 'react-icons/lib/md/menu';
import Menu from 'cat-components/lib/menu';

import * as style from './style/useMenu';

@radium
export default class UseMenu extends React.Component {
  render() {
    return (
      <Menu menu={() => <h4>Menu</h4>}
        menuStyle={style.menuStyle}
      >
        <MenuIcon style={style.menu} />
      </Menu>
    );
  }
}
