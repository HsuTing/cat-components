'use strict';

import React from 'react';

export default Component => {
  return class CheckFBAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        FBAPICanUse: false
      };
    }

    componentDidMount() {
      const interval = setInterval(() => {
        if(FB) {
          clearInterval(interval);
          this.setState({FBAPICanUse: true});
        }
      }, 1000);
    }

    render() {
      return (
        <Component {...this.state}
          {...this.props}
        />
      );
    }
  }
};
