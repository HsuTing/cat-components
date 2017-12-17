'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

export const load = mod => (callback = () => {}) => {
  callback(mod);
};

@radium
export default class Bundle extends React.Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      mod: null
    };

    this.loadMod = this.loadMod.bind(this);
  }

  componentWillMount() {
    const {load} = this.props;

    this.loadMod(load);
  }

  componentWillReceiveProps(nextProps) {
    const {load} = nextProps;

    if(this.props.load !== load)
      this.loadMod(load);
  }

  render() {
    const {children} = this.props;
    const {mod} = this.state;

    return (
      mod ?
        children(mod) :
        null
    );
  }

  loadMod(load) {
    this.setState({mod: null});

    load(mod => {
      this.setState({mod: mod.default || mod});
    });
  }
}
