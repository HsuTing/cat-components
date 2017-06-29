'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {connect} from 'react-redux';

import Wrapper from './../Wrapper';

export const testReducer = (state = 'origin state', {type}) => {
  return state;
};

@radium
@connect(state => ({data: state.testReducer}))
class TestRedux extends React.Component {
  static propTypes = {
    data: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>{`test redux(${this.props.data})`}</div>
    );
  }
}

/* eslint-disable */
export default ({redux}) => (
  <Wrapper redux={redux}>
    <TestRedux />
  </Wrapper>
);
/* eslint-enable */
