'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Button from 'cat-components/lib/button';
import Sidebar, {sidebarBuilder} from 'cat-components/lib/sidebar';

@radium
@sidebarBuilder
class UseSidebar extends React.Component {
  static propTypes = {
    sidebar: PropTypes.func.isRequired
  }

  render() {
    const {sidebar} = this.props;

    return (
      <Button onClick={sidebar}>Sidebar</Button>
    );
  }
}

const menu = ({hide}) => ( // eslint-disable-line react/prop-types
  <div>
    <h4 onClick={hide}>Item1</h4>
    <h4>Item2</h4>
    <h4>Item3</h4>
  </div>
);

export default () => ( // eslint-disable-line react/display-name
  <Sidebar menu={menu}>
    <UseSidebar />
  </Sidebar>
);
