'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import {render} from './utils';

@radium
export default class CanvasText extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    ctx: PropTypes.object,
    children: PropTypes.string,
    x: PropTypes.string,
    y: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    this.draw();
  }

  componentDidupdate() {
    this.draw();
  }

  render() {
    return render('text', this.props);
  }

  draw() {
    const {type, ctx, children, x, y} = this.props;

    if(type === 'svg')
      return;

    ctx.fillText(children, x, y);
  }
}
