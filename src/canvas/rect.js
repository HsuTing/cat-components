'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import mergeArrayStyle from 'utils/mergeArrayStyle';

import {render} from './utils';

@radium
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
    return render('rect', this.props);
  }

  draw() {
    const {type, ctx, x, y, width, height, style} = this.props;

    if(type === 'svg')
      return;

    const {fill} = mergeArrayStyle(style);

    ctx.fillStyle = fill;
    ctx.fillRect(x, y, width, height);
  }
}
