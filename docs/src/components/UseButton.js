'use strict';

import React from 'react';
import radium from 'radium';
import Button from 'cat-components/lib/button';

@radium
export default class UseButton extends React.Component {
  render() {
    return (
      <div>
        <Button>button</Button>

        <Button link='https://github.com/HsuTing/cat-components'
        >button with a link</Button>

        <Button link='https://github.com/HsuTing/cat-components'
          target='_blank'
        >button with a link(target: _blank)</Button>
      </div>
    );
  }
}
