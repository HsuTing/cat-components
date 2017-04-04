'use strict';

import React from 'react';
import radium from 'radium';
import MenuIcon from 'react-icons/lib/md/menu';

import style from './style/useMenu';
import Menu from './../Menu';

@radium
class Template extends React.Component {
  render() {
    return (
      <div>
        <h4>menu</h4>
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
      </div>
    );
  }
}

const menu = {
  component: Template,
  props: {
    style: {
      top: '-230px',
      transformOrigin: '0px 100%'
    }
  }
};

@radium
export default class UseMenu extends React.Component {
  render() {
    return (
      <Menu menu={menu}>
        <MenuIcon style={style.menu} />
      </Menu>
    );
  }
}
