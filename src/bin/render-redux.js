'use strict';

import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

export default (Component, {reducer, preloadedState, enhancer}) => {
  let store;

  if(preloadedState) {
    if(enhancer)
      store = createStore(reducer, preloadedState, applyMiddleware(enhancer));
    else
      store = createStore(reducer, preloadedState);
  }
  else if(enhancer)
    store = createStore(reducer, applyMiddleware(enhancer));
  else
    store = createStore(reducer);

  return () => ( // eslint-disable-line react/display-name
    <Provider store={store}>
      {Component}
    </Provider>
  );
};
