'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import Buttons from './Buttons';
import Content from './Content';
import * as constants from './constants-multiple';

@radium
export default class Multiple extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    const {data} = this.props;

    return (
      <div>
        {Object.keys(constants).map((name, nameIndex) => (
          <Buttons key={nameIndex}
            title={name}
            items={constants[name]}
          />
        ))}

        {Object.keys(constants).map((name, nameIndex) => (
          <div key={nameIndex}>
            {constants[name].map((item, itemIndex) => (
              <Content key={itemIndex}
                example={data[`Use${item.name}`] || ''}
                {...item}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
