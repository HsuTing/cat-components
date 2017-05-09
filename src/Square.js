'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import uuid from 'uuid';
import eventController from 'cat-utils/lib/event-controller';

@radium
export default class Square extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      height: 'initial'
    };

    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    const id = uuid.v4();
    const resize = () => {
      this.resize(this.node);
    };

    resize();
    eventController.addEvent = {
      name: 'resize',
      id,
      event: resize
    };
    this.id = id;
  }

  componentWillUnmount() {
    eventController.removeEvent = {
      name: 'resize',
      id: this.id
    };
  }

  render() {
    const {children} = this.props;
    const {height} = this.state;

    return React.cloneElement(children, {
      ref: node => (this.node = node),
      style: {
        height,
        ...children.props.style
      }
    });
  }

  resize(dom) {
    this.setState({height: `${dom.offsetWidth}px`});
  }
}
