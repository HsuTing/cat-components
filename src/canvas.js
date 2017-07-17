'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

@radium
export default class Canvas extends React.Component {
  static propTypes = {
    checkSupport: PropTypes.func,
    rootStyle: PropTypes.object,
    style: PropTypes.object,
    children: PropTypes.element
  }

  static defaultProps = {
    style: {},
    checkSupport: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
      ctx: null
    };

    this.getCanvas = this.getCanvas.bind(this);
    this.checkSupport = this.checkSupport.bind(this);
  }

  componentDidMount() {
    if(this.checkSupport('mount'))
      this.getCanvas();
  }

  shouldComponentUpdate() {
    return this.checkSupport();
  }

  render() {
    const {children, rootStyle, ...props} = this.props;

    delete props.checkSupport;

    return (
      <div style={rootStyle}>
        <canvas {...props}
          ref={node => (this.canvasNode = node)}
        />

        {
          !this.state.canvas ?
            null :
            React.Children.map(children, node => (
              React.cloneElement(node, this.state)
            ))
        }
      </div>
    );
  }

  getCanvas() {
    const canvas = this.canvasNode;

    this.setState({
      canvas: canvas || null,
      ctx: canvas ? canvas.getContext('2d') : null
    });
  }

  checkSupport(type) {
    const {checkSupport} = this.props;

    if(!this.canvasNode.getContext) {
      if(type === 'mount')
        checkSupport();
    }

    return true;
  }
}
