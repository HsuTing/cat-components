'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

/* eslint-disable object-curly-spacing */
export CanvasRect from './canvas/rect';
/* eslint-enable object-curly-spacing */

@radium
export default class Canvas extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    checkSupport: PropTypes.func,
    rootStyle: PropTypes.object,
    style: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  }

  static defaultProps = {
    type: 'canvas',
    style: {},
    checkSupport: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
      ctx: null
    };

    this.init = true;
    this.renderCanvas = this.renderCanvas.bind(this);
    this.renderSvg = this.renderSvg.bind(this);
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
    const {type} = this.props;
    const {canvas} = this.state;

    if(this.init || (canvas && type === 'canvas'))
      return this.renderCanvas();

    return this.renderSvg();
  }

  renderCanvas() {
    const {children, rootStyle, ...props} = this.props;
    const {canvas} = this.state;

    delete props.checkSupport;

    return (
      <div style={rootStyle}>
        <canvas {...props}
          ref={node => (this.canvasNode = node)}
        />

        {
          !canvas ?
            null :
            React.Children.map(children, node => (
              React.cloneElement(node, {
                ...this.state,
                type: 'canvas'
              })
            ))
        }
      </div>
    );
  }

  renderSvg() {
    const {children, rootStyle, ...props} = this.props;

    delete props.checkSupport;

    return (
      <div style={rootStyle}>
        <svg {...props}>
          {React.Children.map(children, node => (
            React.cloneElement(node, {
              type: 'svg'
            })
          ))}
        </svg>
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

    if(type === 'mount')
      this.init = false;

    return true;
  }
}
