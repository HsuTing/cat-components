'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import areEqual from 'fbjs/lib/areEqual';
import invariant from 'invariant';

import eventController from 'utils/eventController';

import * as style from './style/slider';

export const sliderStyle = style;

@radium
export default class Slider extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    buttonStyle: PropTypes.func,
    barStyle: PropTypes.func
  }

  static defaultProps = {
    onChange: /* istanbul ignore next */ () => {},
    min: 0,
    max: 100,
    value: 0,
    barStyle: () => {},
    buttonStyle: () => {}
  }

  constructor(props) {
    super(props);
    const {value} = props;
    this.state = {
      value
    };

    this.findLeft = this.findLeft.bind(this);
    this.click = this.click.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.setValue = this.setValue.bind(this);
    this.change = this.change.bind(this);
    this.checkValue = this.checkValue.bind(this);

    this.checkValue();
  }

  componentWillReceiveProps(nextProps) {
    /* istanbul ignore if */
    if(!areEqual(this.props.value, nextProps.value))
      this.setState({value: nextProps.value});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.value !== nextState.value
    );
  }

  componentDidUpdate() {
    this.checkValue();
  }

  render() {
    const {style: propsStyle, max, min, buttonStyle, barStyle, ...props} = this.props;
    const {value} = this.state;
    const percentage = (value - min) / (max - min) * 100;
    const left = `calc(${percentage}% - 10px)`;

    delete props.onChange;
    delete props.value;

    return (
      <div {...props}
        ref={node => (this.node = node)}
        style={[style.root, propsStyle]}
        onClick={this.click}
      >
        <div style={[style.bar(left), barStyle(percentage / 100)]} />
        <div style={[style.button(left), buttonStyle(percentage / 100)]}
          onMouseDown={this.dragStart}
        />
      </div>
    );
  }

  findLeft(element) {
    let left = 0;

    do {
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while(element);

    return left;
  }

  click(e) {
    const {max, min} = this.props;
    const interval = this.node.offsetWidth || 100;

    this.change(
      (e.pageX - this.findLeft(this.node)) / interval * (max - min),
      e
    );
  }

  dragStart(e) {
    eventController.addEvent = {
      name: 'mousemove',
      id: 'slider-mousemove',
      event: this.setValue(e.pageX)
    };

    eventController.addEvent = {
      name: 'mouseup',
      id: 'slider-mouseup',
      event: () => {
        [{
          name: 'mousemove',
          id: 'slider-mousemove'
        }, {
          name: 'mouseup',
          id: 'slider-mouseup'
        }].forEach(data => (eventController.removeEvent = data));
      }
    };
  }

  setValue(start) {
    const {value: originValue} = this.state;
    const interval = this.node.offsetWidth || 100;

    return e => {
      const {min, max} = this.props;

      this.change(
        (e.pageX - start) / interval * (max - min) + originValue,
        e
      );
    };
  }

  change(originValue, e) {
    const {min, max, onChange} = this.props;
    let value = originValue;

    if(value < min)
      value = min;
    else if(value > max)
      value = max;

    onChange(value, e);
    this.setState({value});
  }

  checkValue() {
    const {value} = this.state;
    const {min, max} = this.props;

    invariant(
      !(value < min),
      '"value" should not be smaller then "min".'
    );

    invariant(
      !(max < value),
      '"value" should not be bigger then "max".'
    );

    invariant(
      !(max === min),
      '"min" should not be equal to "max".'
    );
  }
}
