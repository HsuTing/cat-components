'use strict';

import React from 'react';
import radium from 'radium';

import GoTo from './../GoTo';
import Button from './../Button';

@radium
export default class UseGoTo extends React.Component {
  render() {
    return (
      <div>
        <GoTo main='body'>
          <Button>Go Top</Button>
        </GoTo>
        <GoTo main='body'
              target='#Input'
        >
          <Button>Go To Input</Button>
        </GoTo>
      </div>
    );
  }
}
