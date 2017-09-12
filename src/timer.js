'use strict';

import React from 'react';
import moment from 'moment';

export default (
  fps: 120
) => Component => class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: null,
      end: null,
      isRunning: false,
      count: 0
    };

    this.timerStart = this.timerStart.bind(this);
    this.timerStop = this.timerStop.bind(this);
    this.timerReset = this.timerReset.bind(this);
    this.getTime = this.getTime.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {isRunning, ...state} = this.state;

    delete state.start;
    delete state.end;
    delete state.count;

    return (
      <Component {...state}
        {...this.props}
        isRunning={isRunning}
        timer={this.getTime()}
        timerStart={this.timerStart}
        timerStop={this.timerStop}
        timerReset={this.timerReset}
      />
    );
  }

  timerStart(time = moment()) {
    const {isRunning} = this.state;

    if(isRunning)
      return;

    this.interval = setInterval(() => {
      this.setState({end: moment()});
    }, 1000 / fps);

    this.setState({
      start: time,
      end: time,
      isRunning: true
    });
  }

  timerStop() {
    const {start, count, isRunning} = this.state;
    const end = moment();

    if(!isRunning)
      return;

    clearInterval(this.interval);
    this.setState({
      start: null,
      end: null,
      count: count + (end.format('x') - start.format('x')),
      isRunning: false
    });
  }

  timerReset() {
    this.setState({
      start: null,
      end: null,
      count: 0,
      isRunning: false
    });
  }

  getTime() {
    const {start, end, count} = this.state;
    const diff = (
      !start || !end ?
        count :
        count + (end.format('x') - start.format('x'))
    );
    const diffTime = moment.duration(diff);

    return {
      hours: diffTime.days() * 24 + diffTime.hours(),
      minutes: diffTime.minutes(),
      seconds: diffTime.seconds(),
      milliseconds: diffTime.milliseconds()
    };
  }
};
