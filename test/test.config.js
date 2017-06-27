'use strict';

const {combineReducers} = require('redux');

const {testReducer} = require('./../lib/test/TestRedux');

module.exports = [{
  component: './lib/test/TestReact',
  name: 'test/test-react',
  template: 'test.html'
}, {
  redux: true,
  component: './lib/test/TestRedux',
  name: 'test/test-redux',
  template: 'test.html',
  props: {
    reducer: combineReducers({testReducer: testReducer})
  }
}, {
  redux: true,
  component: './lib/test/TestRedux',
  name: 'test/test-redux/preloadedState',
  template: 'test.html',
  props: {
    reducer: combineReducers({testReducer: testReducer}),
    preloadedState: {testReducer: 'preloaded state'}
  }
}];
