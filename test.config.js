'use strict';

const {combineReducers} = require('redux');

const {testReducer} = require('./lib/docs/test/TestRedux');
const useUrls = require('./lib/utils/useUrls').default;

module.exports = [{ // test react
  component: './lib/docs/test/TestReact',
  name: 'test/test-react',
  template: 'test.html'
}, { // test redux
  component: './lib/docs/test/TestRedux',
  name: 'test/test-redux',
  template: 'test.html',
  props: {
    redux: {
      reducer: combineReducers({testReducer: testReducer})
    }
  }
}, {
  component: './lib/docs/test/TestRedux',
  name: 'test/test-redux/preloadedState',
  template: 'test.html',
  props: {
    redux: {
      reducer: combineReducers({testReducer: testReducer}),
      preloadedState: {testReducer: 'preloaded state'}
    }
  }
}].concat(useUrls(['/', '/about/'], { // test router
  component: './lib/docs/test/TestRouter',
  name: 'test/test-router',
  template: 'test.html'
}));
