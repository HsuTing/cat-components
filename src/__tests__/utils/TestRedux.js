'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import * as redux from 'redux';
import * as reactRedux from 'react-redux';
import {connect} from 'react-redux';
import Wrapper from 'cat-components/lib/wrapper';

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
    const {data} = this.props;

    return (
      <div>{`test redux(${data})`}</div>
    );
  }
}

/* eslint-disable */
export default ({redux: propsRedux}) => (
  <Wrapper redux={propsRedux}
    modules={{
      redux,
      reactRedux
    }}
  >
    <TestRedux />
  </Wrapper>
);
/* eslint-enable */
