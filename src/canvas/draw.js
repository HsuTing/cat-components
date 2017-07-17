'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class Draw extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isPainted: false
    };
    this.mouse = {
      x: 0,
      y: 0
    };

    this.getMousePosition = this.getMousePosition.bind(this);
    this.startPaint = this.startPaint.bind(this);
    this.stopPaint = this.stopPaint.bind(this);
    this.paint = this.paint.bind(this);
  }

  render() {
    return React.cloneElement(this.props.children, {
      onMouseDown: this.startPaint,
      onMouseUp: this.stopPaint,
      onMouseMove: this.paint,
      onMouseOut: this.stopPaint
    });
  }

  getMousePosition(e) {
    this.mouse = {
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop
    };
  }

  startPaint(e, {ctx}) {
    if(!ctx)
      return;

    this.getMousePosition(e);
    ctx.beginPath();
    ctx.moveTo(this.mouse.x, this.mouse.y);

    this.setState({isPainted: true});
  }

  stopPaint(e, {ctx}) {
    if(!ctx)
      return;

    ctx.closePath();
    this.setState({isPainted: false});
  }

  paint(e, {ctx}) {
    const {isPainted} = this.state;

    if(isPainted && ctx) {
      this.getMousePosition(e);
      ctx.lineTo(this.mouse.x, this.mouse.y);
      ctx.stroke();
    }
  }
}
