'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {connect} from 'react-redux';

export const testReducer = (state = 'origin state', {type}) => {
  return state;
};

@radium
@connect(state => ({data: state.testReducer}))
export default class TestRedux extends React.Component {
  static propTypes = {
    data: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>{`test redux(${this.props.data})`}</div>
    );
  }
}
