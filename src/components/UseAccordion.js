'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';

import Accordion from './../Accordion';

@radium
export default class UseAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.onClick = this.onClick.bind(this);
  }

  render() {
    const {index} = this.state;

    return (
      <Accordion index={index}>
        {['1', '2', '3'].map((name, nameIndex) => {
          return (
            <StyleRoot key={nameIndex}
                       onClick={this.onClick(nameIndex)}
            >
              <h5>{`title${name}`}</h5>
              <p>{`content${name}`}</p>
            </StyleRoot>
          );
        })}
      </Accordion>
    );
  }

  onClick(index) {
    return e => {
      if(index === this.state.index)
        this.setState({index: -1});
      else
        this.setState({index});
    };
  }
}
