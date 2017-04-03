'use strict';

import React from 'react';
import radium from 'radium';
import eases from 'eases';

@radium
export default class GoTo extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    main: React.PropTypes.string.isRequired,
    target: React.PropTypes.string,
    sec: React.PropTypes.number,
    fps: React.PropTypes.number,
    animation: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.func
    ])
  }

  static defaultProps = {
    sec: 2,
    fps: 60,
    animation: 'quartInOut'
  }

  constructor(props) {
    super(props);

    this.findTop = this.findTop.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  render() {
    const {children} = this.props;

    return React.cloneElement(children, {
      onClick: this.goTo
    });
  }

  findTop(element) {
    let top = 0;

    do {
      top += element.offsetTop  || 0;
      element = element.offsetParent;
    } while(element);

    return top;
  }

  goTo() {
    const {main, target, sec, fps, animation} = this.props;
    const dom = document.querySelector(main);
    const start = dom.scrollTop;
    const end = target ? this.findTop(document.querySelector(target)) : 0;
    const total = start - end;
    const func = typeof animation === 'string' ? eases[animation] : animation;
    let count = 0;

    const interval = setInterval(() => {
      const t = ((1000 / fps) * count) / (sec * 1000);
      let next_position = total * (1 - func(t)) + end;

      if(total > 0 && next_position <= end ||
         total < 0 && next_position >= end
      ) {
        next_position = end;
        clearInterval(interval);
      }

      dom.scrollTop = next_position;
      count = count + 1;
    }, (1000 / fps));
  }
}
