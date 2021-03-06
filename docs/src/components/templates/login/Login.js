'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';
import * as redux from 'redux';
import * as reactRedux from 'react-redux';
import * as reactRouterDom from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Wrapper from 'cat-components/lib/wrapper';
import Icon from 'cat-components/lib/icon';

import Normalize from './../../share/Normalize';
import Form from './Form';
import * as style from './style/login';

@radium
class Login extends React.Component {
  render() {
    return (
      <StyleRoot style={style.root}>
        <div />

        <div style={style.content}>
          <div style={style.iconRoot}>
            <Icon />
          </div>

          <Switch>
            <Route path='/login/'
              component={() => <Form type='login' />}
              exact
            />

            <Route path='/register/'
              component={() => <Form type='register' />}
              exact
            />
          </Switch>
        </div>

        <div />
      </StyleRoot>
    );
  }
}

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, redux: propsRedux, router}) => (
  <Wrapper radiumConfig={radiumConfig}
    redux={propsRedux}
    router={router}
    modules={{
      redux,
      reactRedux,
      reactRouterDom
    }}
  >
    <div>
      <Normalize />

      <Login />
    </div>
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
