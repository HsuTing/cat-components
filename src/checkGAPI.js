'use strict';

import React from 'react';

export default Component => {
  return class CheckGAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        GAPICanUse: false
      };
    }

    componentDidMount() {
      const interval = setInterval(() => {
        if(gapi) {
          clearInterval(interval);
          this.setState({GAPICanUse: true});
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
