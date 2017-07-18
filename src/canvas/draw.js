'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class Draw extends React.Component {
  static propTypes = {
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseOut: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchMove: PropTypes.func,
    onTouchEnd: PropTypes.func,
    children: PropTypes.element.isRequired
  }

  static defaultProps = {
    onMouseDown: () => {},
    onMouseUp: () => {},
    onMouseMove: () => {},
    onMouseOut: () => {},
    onTouchStart: () => {},
    onTouchMove: () => {},
    onTouchEnd: () => {}
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
      onMouseOut: this.stopPaint,
      onTouchStart: this.startPaint,
      onTouchMove: this.paint,
      onTouchEnd: this.stopPaint
    });
  }

  getMousePosition(e) {
    this.mouse = {
      x: e.pageX - e.target.offsetLeft,
      y: e.pageY - e.target.offsetTop
    };
  }

  startPaint(e, {ctx}) {
    const {onMouseDown, onTouchStart} = this.props;

    onMouseDown(e);
    onTouchStart(e);

    if(!ctx)
      return;

    this.getMousePosition(e);
    ctx.beginPath();
    ctx.moveTo(this.mouse.x, this.mouse.y);

    this.setState({isPainted: true});
  }

  stopPaint(e, {ctx}) {
    const {onMouseUp, onMouseOut, onTouchEnd} = this.props;

    onMouseUp(e);
    onMouseOut(e);
    onTouchEnd(e);

    if(!ctx)
      return;

    ctx.closePath();
    this.setState({isPainted: false});
  }

  paint(e, {ctx}) {
    const {onMouseMove, onTouchMove} = this.props;
    const {isPainted} = this.state;

    onMouseMove(e);
    onTouchMove(e);

    if(isPainted && ctx) {
      this.getMousePosition(e);
      ctx.lineTo(this.mouse.x, this.mouse.y);
      ctx.stroke();
    }
  }
}
