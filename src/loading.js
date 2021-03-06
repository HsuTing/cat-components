'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import * as d3 from 'd3';
import eases from 'eases';

import * as style from './style/loading';

export const loadingStyle = style;

@radium
export default class Loading extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    fps: PropTypes.number,
    sec: PropTypes.number,
    diff: PropTypes.number,
    animation: PropTypes.string
  }

  static defaultProps = {
    innerRadius: 10,
    outerRadius: 13,
    sec: 0.5,
    fps: 60,
    diff: 0.8,
    animation: 'quartInOut'
  }

  constructor(props) {
    super(props);
    const {innerRadius, outerRadius} = props;
    this.state = {
      path: d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius),
      start: 0,
      end: 0
    };

    this.interval = {};
    this.animation = this.animation.bind(this);
  }

  componentDidMount() {
    this.animation('start');
  }

  componentWillReceiveProps(nextProps) {
    /* istanbul ignore if */
    if(this.props.innerRadius !== nextProps.innerRadius ||
      this.props.outerRadius !== nextProps.outerRadius) {
      this.setState({
        path: d3.arc()
          .innerRadius(nextProps.innerRadius)
          .outerRadius(nextProps.outerRadius)
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval.start);
    clearInterval(this.interval.end);
  }

  render() {
    const {outerRadius, style: propsStyle, ...props} = this.props;
    const {path, start, end} = this.state;

    delete props.innerRadius;
    delete props.fps;
    delete props.sec;
    delete props.diff;
    delete props.animation;

    return (
      <StyleRoot {...props}
        style={[style.root(outerRadius), style.animtion, propsStyle]}
      >
        <svg style={style.root(outerRadius)}>
          <g style={style.g(outerRadius)}>
            <path d={path.startAngle(start * 2 * Math.PI).endAngle(end * 2 * Math.PI)()}
              style={style.circle}
            />
          </g>
        </svg>
      </StyleRoot>
    );
  }

  animation(name) {
    const {fps, sec, diff, animation} = this.props;
    const origin = this.state[name];
    const perTime = 1000 / fps;
    const func = typeof animation === 'string' ? eases[animation] : /* istanbul ignore next */ animation;
    const realyName = name === 'start' ? 'end' : 'start';
    let count = 0;

    this.interval[realyName] = setInterval(() => {
      if(perTime * count > sec * 1000) {
        this.animation(realyName);
        clearInterval(this.interval[realyName]);
      }

      const output = {};
      const add = diff * func(perTime * count / (sec * 1000));

      output[name] = origin + add;
      count = count + 1;
      this.setState(output);
    }, perTime);
  }
}
