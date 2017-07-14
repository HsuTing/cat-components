'use strict';

import React from 'react';
import radium from 'radium';
import Slider from 'cat-components/lib/slider';

@radium
export default class UseSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20
    };

    this.change = this.change.bind(this);
  }

  render() {
    const {value} = this.state;

    return (
      <div>
        <Slider onChange={this.change}
          value={value}
        />

        <h5>{value}</h5>
      </div>
    );
  }

  change(value) {
    this.setState({value});
  }
}
