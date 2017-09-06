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
      <div>
        <h5>default trigger</h5>
        <div>
          <Menu menu={() => <h4>Menu</h4>}
            menuStyle={style.menuStyle}
          >
            <MenuIcon style={style.menu} />
          </Menu>
        </div>

        <h5>{`trigger: ['click']`}</h5>
        <div>
          <Menu menu={() => <h4>Menu</h4>}
            menuStyle={style.menuStyle}
            trigger={['click']}
          >
            <MenuIcon style={style.menu} />
          </Menu>
        </div>

        <h5>{`trigger: ['hover']`}</h5>
        <div>
          <Menu menu={() => <h4>Menu</h4>}
            menuStyle={style.menuStyle}
            trigger={['hover']}
          >
            <MenuIcon style={style.menu} />
          </Menu>
        </div>
      </div>
    );
  }
}
