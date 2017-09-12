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

    if(load !== this.props.load)
      this.loadMod(load);
  }

  loadMod(load) {
    this.setState({mod: null});

    load(mod => {
      this.setState({mod: mod.default ? mod.default : mod});
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}
