'use strict';

import radium from 'radium';
import invariant from 'invariant';

export default (status = true, styles = []) => {
  invariant(
    styles.length >= 2,
    'Here are needed at least two styles.'
  );

  const max = styles.length - 1;
  const animations = {};
  const newStyles = status ? [...styles] : [...styles].reverse();
  const diff = 100 / max;

  newStyles.forEach((style, index) => {
    animations[`${diff * index + 0}%`] = style;
  });

  return {
    ...(status ? styles[max] : styles[0]),
    animationName: radium.keyframes(animations)
  };
};
