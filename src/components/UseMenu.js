'use strict';

import React from 'react';
import radium from 'radium';
import MenuIcon from 'react-icons/lib/md/menu';

import style from 'componentsStyle/useMenu';

import Menu from './../Menu';

const menuStyle = () => ({
  top: '-230px',
  transformOrigin: '0px 100%'
});

@radium
export default class UseMenu extends React.Component {
  render() {
    return (
      <Menu menu={<h4>Menu</h4>}
        menuStyle={menuStyle}
      >
        <MenuIcon style={style.menu} />
      </Menu>
    );
  }
}
