'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Button from 'cat-components/lib/button';
import goToAnimation from 'cat-components/lib/goToAnimation';

@radium
@goToAnimation('body')
export default class UseGoTo extends React.Component {
  static propTypes = {
    goTo: PropTypes.func.isRequired
  }

  render() {
    const {goTo} = this.props;

    return (
      <div>
        <Button onClick={() => goTo()}>Go Top</Button>
        <Button onClick={() => goTo('#Input')}>Go To Input</Button>
      </div>
    );
  }
}
