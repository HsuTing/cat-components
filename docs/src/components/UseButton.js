'use strict';

import React from 'react';
import radium from 'radium';

import Button from './../Button';

@radium
export default class UseButton extends React.Component {
  render() {
    return (
      <Button>button</Button>
    );
  }
}
