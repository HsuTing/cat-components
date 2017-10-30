'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

@radium
export default class Wrapper extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    redux: PropTypes.shape({
      reducer: PropTypes.func.isRequired,
      preloadedState: PropTypes.object,
      enhancer: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.func)
      ])
    }),
    router: PropTypes.shape({
      isServer: PropTypes.bool
    }),
    modules: PropTypes.object
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

    const {redux, reactRedux} = this.props.modules;
    const {createStore, applyMiddleware} = redux;
    const {Provider} = reactRedux;

    const {reducer, preloadedState, enhancer} = this.props.redux;
    let store;

    if(preloadedState) {
      if(enhancer) {
        store = createStore(
          reducer,
          preloadedState, (
            enhancer instanceof Array ?
              applyMiddleware(...enhancer) :
              applyMiddleware(enhancer)
          )
        );
      } else
        store = createStore(reducer, preloadedState);
    } else if(enhancer) {
      store = createStore(
        reducer, (
          enhancer instanceof Array ?
            applyMiddleware(...enhancer) :
            applyMiddleware(enhancer)
        )
      );
    } else
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

    const {reactRouterDom} = this.props.modules;
    const {isServer, ...routerProps} = this.props.router;
    const Router = reactRouterDom[
      isServer ? 'StaticRouter' : 'BrowserRouter'
    ];

    return (
      <Router {...routerProps}>
        {component}
      </Router>
    );
  }
}
