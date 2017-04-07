'use strict';

import React from 'react';
import radium from 'radium';

import Button from './../Button';
import Sidebar from './../Sidebar';

@radium
export default class UseSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  render() {
    return (
      <Button onClick={this.click}>Sidebar</Button>
    );
  }

  click() {
    Sidebar.show(
      <div>
        <h4>Item1</h4>
        <h4>Item2</h4>
        <h4>Item3</h4>
      </div>
    );
  }
}
