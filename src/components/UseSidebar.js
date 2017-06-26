'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import Button from './../Button';
import Sidebar, {sidebarBuilder} from './../Sidebar';

@radium
@sidebarBuilder
class UseSidebar extends React.Component {
  static propTypes = {
    sidebar: PropTypes.func.isRequired
  }

  render() {
    return (
      <Button onClick={this.props.sidebar}>Sidebar</Button>
    );
  }
}

const menu = (
  <div>
    <h4>Item1</h4>
    <h4>Item2</h4>
    <h4>Item3</h4>
  </div>
);

export default () => ( // eslint-disable-line react/display-name
  <Sidebar menu={menu}>
    <UseSidebar />
  </Sidebar>
);
