'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

export const canvasController = Component => class extends React.Component { // eslint-disable-line react/display-name
  static contextTypes = {
    canvas: PropTypes.object,
    ctx: PropTypes.object
  }

  render() {
    return (
      <Component {...this.state}
        {...this.props}
        {...this.context}
      />
    );
  }
}

@radium
export default class Canvas extends React.Component {
  static propTypes = {
    checkSupport: PropTypes.func
  }

  static childContextTypes = {
    canvas: PropTypes.object,
    ctx: PropTypes.object
  }

  static defaultProps = {
    checkSupport: () => {}
  }

  constructor(props) {
    super(props);
    this.checkSupport = this.checkSupport.bind(this);
  }

  getChildContext() {
    const canvas = this.canvas;

    return {
      canvas: canvas || null,
      ctx: canvas ? canvas.getContext('2d') : null
    };
  }

  componentDidMount() {
    if(this.checkSupport('mount'))
      this.forceUpdate();
  }

  shouldComponentUpdate() {
    return this.checkSupport();
  }

  render() {
    const props = {...this.props}

    delete props.checkSupport;

    return (
      <canvas {...props}
        ref={node => (this.canvas = node)}
      />
    );
  }

  checkSupport(type) {
    if(!this.canvas.getContext) {
      if(type === 'mount')
        this.props.checkSupport();
    }

    return true;
  }
}
