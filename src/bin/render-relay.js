'use strict';

import React from 'react';
import IsomorphicRelay from 'isomorphic-relay';

export default (options, {rootContainerProps, networkLayer}, render) => IsomorphicRelay
  .prepareData(rootContainerProps, networkLayer)
  .then(({data, props}) => {
    render(
      <IsomorphicRelay.Renderer {...props} />, {
        ...options,
        data: JSON.stringify(data)
      }
    );
  });
