'use strict';

import React from 'react';

export const render = (component, {type, ...props}) => { // eslint-disable-line react/display-name
  if(type === 'svg')
    return React.createElement(component, props);

  return null;
};
