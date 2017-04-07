'use strict';

import React from 'react';
import radium from 'radium';

import Button from './../Button';
import Alert from './../Alert';

@radium
export default class UseAlert extends React.Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  render() {
    return (
      <Button onClick={this.click}>Alert</Button>
    );
  }

  click() {
    Alert.show(
      <div>
        <h4>title</h4>
        <p>Alert</p>
      </div>
    );
  }
}
