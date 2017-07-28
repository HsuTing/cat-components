'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import uuid from 'uuid';

import eventController from 'utils/eventController';
import imgResize from 'utils/imgResize';

import Img from './../img';

@radium
export default class ImgResize extends React.Component {
  static propTypes = {
    onLoad: PropTypes.func
  }

  static defaultProps = {
    onLoad: () => {}
  }

  constructor(props) {
    super(props);
    this.id = null;
    this.onload = this.onload.bind(this);
  }

  componentDidUpdate() {
    this.resize();
  }

  componentWillUnmount() {
    eventController.removeEvent = {
      name: 'resize',
      id: this.id
    };
  }

  render() {
    return (
      <Img {...this.props}
        onLoad={this.onload}
      />
    );
  }

  onload(e) {
    const {onLoad} = this.props;
    const id = uuid.v4();
    const target = e.target;
    this.resize = () => {
      imgResize(target);
    };

    onLoad(e);

    eventController.addEvent = {
      name: 'resize',
      id,
      event: this.resize
    };
    this.resize();
    this.id = id;
  }
}
