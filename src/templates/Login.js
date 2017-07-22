'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import {Switch, Route} from 'react-router-dom';
import Icon from 'cat-components/lib/icon';
import Button from 'cat-components/lib/button';
import Link from 'cat-components/lib/link';
import Input, {inputConnect} from 'cat-components/lib/input-redux';

import * as style from './style/login';

const fields = [{
  name: 'email',
  rules: [{
    validator: 'isEmail',
    not: true,
    message: 'This is not an email.'
  }]
}, {
  type: 'password',
  name: 'password',
  rules: [{
    validator: value => value.length < 8,
    message: 'Password is too short.'
  }]
}];

const registerFields = [{
  name: 'name',
  rules: [{
    validator: 'isEmpty',
    message: 'This can not be empty.'
  }]
}];

@inputConnect('login')()
@radium
class Field extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    rules: PropTypes.array.isRequired,
    form: PropTypes.object.isRequired,
    inputDispatch: PropTypes.func.isRequired
  }

  render() {
    const {type, name, rules, form, inputDispatch} = this.props;
    const {value, isError, error} = form[name] || {};

    return (
      <div style={style.inputRoot}>
        <h4 style={style.title}>{name}</h4>

        <Input type={type || 'text'}
          rules={rules}
          value={value || ''}
          onChange={data => inputDispatch(name, data)}
        />

        {
          !isError ?
            null :
            <p style={style.error}>{(error || []).join(' ,')}</p>
        }
      </div>
    );
  }
}

@inputConnect('login')()
@radium
class Submit extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    submitDispatch: PropTypes.func.isRequired
  }

  render() {
    const {type, submitDispatch} = this.props;
    console.log(type);

    return (
      <Button onClick={() => submitDispatch(data => alert(JSON.stringify(data, null, 2)))}
      >submit</Button>
    );
  }
}

@radium
export default class Login extends React.Component {
  render() {
    return (
      <StyleRoot style={style.root}>
        <div />

        <div style={style.content}>
          <div style={style.iconRoot}>
            <Icon />
          </div>

          {fields.map((field, fieldIndex) => (
            <Field key={fieldIndex}
              {...field}
            />
          ))}

          <Switch>
            <Route path='/register/'
              exact
            >
              <div>
                {registerFields.map((field, fieldIndex) => (
                  <Field key={fieldIndex}
                    {...field}
                  />
                ))}
              </div>
            </Route>
          </Switch>

          <div style={style.buttonRoot}>
            <Switch>
              <Route path='/login/'
                exact
              >
                <div>
                  <Submit type='login' />

                  <br/>

                  <Link style={style.register}
                    to='/register/'
                  >register</Link>
                </div>
              </Route>

              <Route path='/register/'
                exact
              >
                <div>
                  <Submit type='register' />

                  <br/>

                  <Link style={style.register}
                    to='/login/'
                  >cancel</Link>
                </div>
              </Route>
            </Switch>
          </div>
        </div>

        <div />
      </StyleRoot>
    );
  }
}
