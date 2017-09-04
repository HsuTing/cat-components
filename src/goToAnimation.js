'use strict';

import React from 'react';
import eases from 'eases';

const findTop = element => {
  let top = 0;

  if(!element)
    return top;

  do {
    top += element.offsetTop  || 0;
    element = element.offsetParent;
  } while(element);

  return top;
};

const goTo = (main, options) => {
  return target => {
    const {sec, fps, animation} = {
      sec: 2,
      fps: 60,
      animation: 'quartInOut',
      ...options
    };
    const dom = document.querySelector(main);
    const start = dom.scrollTop;
    const end = target ? findTop(document.querySelector(target)) : 0;
    const total = start - end;
    const func = typeof animation === 'string' ? eases[animation] : animation;
    let count = 0;

    const interval = setInterval(() => {
      const t = ((1000 / fps) * count) / (sec * 1000);
      let next_position = total * (1 - func(t)) + end;

      if(total > 0 && next_position <= end ||
        total < 0 && next_position >= end ||
        total === 0
      ) {
        next_position = end;
        clearInterval(interval);
      }

      dom.scrollTop = next_position;
      count = count + 1;
    }, (1000 / fps));
  };
};

export default (
  main = '',
  options = {}
) => Component => class GoToAnimation extends React.Component {
  render() {
    return (
      <Component {...this.state}
        {...this.props}
        goTo={goTo(main, options)}
      />
    );
  }
};
