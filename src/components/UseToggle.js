'use strict';

import React from 'react';
import radium from 'radium';

import Toggle from './../Toggle';

@radium
export default class UseToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    }

    this.click = this.click.bind(this);
  }

  render() {
    const {value} = this.state;

    return (
      <div>
        <div>
          <Toggle type='radio'
                  clicked={value === '1'}
                  onClick={this.click('1')}
          />
          <Toggle type='radio'
                  clicked={value === '2'}
                  onClick={this.click('2')}
          />
        </div>

        <div>
          <Toggle checked />
          <Toggle />
        </div>
      </div>
    );
  }

  click(value) {
    return isClicked => {
      if(isClicked)
        this.setState({value});
      else
        this.setState({value: ''});
    }
  }
}
