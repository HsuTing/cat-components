'use strict';

import React from 'react';
import {StyleRoot} from 'radium';

export default (styles = []) => styles.map((style, styleIndex) => (
  <StyleRoot key={styleIndex}
    style={{animationName: style.animationName}}
  />
));
