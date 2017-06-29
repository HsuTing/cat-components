'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

@radium
export default class Wrapper extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    redux: PropTypes.object,
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.renderRedux = this.renderRedux.bind(this);
    this.renderRouter = this.renderRouter.bind(this);
  }

  render() {
    return this.renderRedux(
      this.renderRouter(
        React.Children.only(this.props.children)
      )
    );
  }

  renderRedux(component) {
    if(!this.props.redux)
      return component;

    const {createStore, applyMiddleware} = require('redux');
    const {Provider} = require('react-redux');

    const {reducer, preloadedState, enhancer} = this.props.redux;
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

    return (
      <Provider store={store}>
        {component}
      </Provider>
    );
  }

  renderRouter(component) {
    if(!this.props.router)
      return component;

    const {isServer, ...routerProps} = this.props.router;
    let Router = null;

    if(isServer)
      Router = require('react-router-dom').StaticRouter;
    else
      Router = require('react-router-dom').BrowserRouter;

    return (
      <Router {...(routerProps || {})}>
        {component}
      </Router>
    );
  }
}
