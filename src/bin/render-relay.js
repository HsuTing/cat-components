'use strict';

import React from 'react';
import IsomorphicRelay from 'isomorphic-relay';

export default (options, render) => IsomorphicRelay
  .prepareData(options.rootContainerProps, options.networkLayer)
  .then(({data, props}) => {
    render(
      <IsomorphicRelay.Renderer {...props} />, {
        ...options,
        data: JSON.stringify(data)
      }
    );
  });
