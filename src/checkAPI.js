'use strict';

import React from 'react';

import checkGlobal from 'utils/checkGlobal';

export default (
  name,
  func,
  getData = callback => callback({}),
  defaultData = {}
) => Component => {
  const state = {};
  state[`${name}CanUse`] = false;

  return class CheckAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ...state,
        ...defaultData
      };
    }

    componentDidMount() {
      checkGlobal.add(
        name, func,
        () => getData(
          data => {
            state[`${name}CanUse`] = true;
            this.setState({
              ...state,
              ...data
            });
          }
        )
      );
    }

    render() {
      return (
        <Component {...this.state}
          {...this.props}
        />
      );
    }
  };
};
