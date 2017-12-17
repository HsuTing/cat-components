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
    const {children} = this.props;

    return this.renderRedux(
      this.renderRouter(
        React.Children.only(children)
      )
    );
  }

  renderRedux(component) {
    const {redux: propsRedux, modules} = this.props;

    if(!propsRedux)
      return component;

    const {redux, reactRedux} = modules;
    const {createStore, applyMiddleware} = redux;
    const {Provider} = reactRedux;
    const {reducer, preloadedState, enhancer} = propsRedux;
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
      <Provider store={store}
      >{component}</Provider>
    );
  }

  renderRouter(component) {
    const {router, modules} = this.props;

    if(!router)
      return component;

    const {reactRouterDom} = modules;
    const {isServer, ...routerProps} = router;
    const Router = reactRouterDom[
      isServer ? 'StaticRouter' : 'BrowserRouter'
    ];

    return (
      <Router {...routerProps}
      >{component}</Router>
    );
  }
}
