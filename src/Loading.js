'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import * as d3 from 'd3';
import eases from 'eases';

import style from 'style/loading';

@radium
export default class Loading extends React.Component {
  static propTypes = {
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

    this.animation = this.animation.bind(this);
  }

  componentDidMount() {
    this.animation('start');
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.innerRadius !== this.props.innerRadius ||
      nextProps.outerRadius !== this.props.outerRadius)
      this.setState({
        path: d3.arc()
          .innerRadius(nextProps.innerRadius)
          .outerRadius(nextProps.outerRadius)
      });
  }

  render() {
    const {outerRadius, ...props} = this.props;
    const {path, start, end} = this.state;

    delete props.innerRadius;
    delete props.fps;
    delete props.sec;
    delete props.diff;
    delete props.animation;

    return (
      <StyleRoot {...props}
                 style={[style.root(outerRadius), style.animtion, props.style]}
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
    const func = typeof animation === 'string' ? eases[animation] : animation;
    let count = 0;

    const interval = setInterval(() => {
      if(perTime * count > sec * 1000) {
        this.animation(name === 'start' ? 'end' : 'start');
        clearInterval(interval)
      }

      const output = {};
      const add = diff * func(perTime * count / (sec * 1000));

      output[name] = origin + add;
      count = count + 1;
      this.setState(output);
    }, perTime);
  }
}
