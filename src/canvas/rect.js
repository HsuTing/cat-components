'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class CanvasRect extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    ctx: PropTypes.object,
    children: PropTypes.element,
    x: PropTypes.string,
    y: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  render() {
    const {type, ...props} = this.props;

    if(type === 'svg') {
      return (
        <rect {...props} />
      );
    }

    return null;
  }

  draw() {
    const {type, ctx, x, y, width, height, style} = this.props;

    if(type === 'svg')
      return;

    const {fill} = style;

    ctx.fillStyle = fill;
    ctx.fillRect(x, y, width, height);
  }
}
