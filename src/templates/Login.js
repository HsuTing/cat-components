'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Icon from 'cat-components/lib/icon';
import Button from 'cat-components/lib/button';
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

@inputConnect('login')()
@radium
export default class Login extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    inputDispatch: PropTypes.func.isRequired,
    submitDispatch: PropTypes.func.isRequired
  }

  render() {
    const {form, inputDispatch, submitDispatch} = this.props;

    return (
      <div style={style.root}>
        <div style={style.iconRoot}>
          <Icon />
        </div>

        {fields.map(({type, name, rules}, index) => {
          const {value, isError, error} = form[name] || {};

          return (
            <div key={index}
              style={style.inputRoot}
            >
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
        })}

        <div style={style.buttonRoot}>
          <Button onClick={() => submitDispatch(data => alert(JSON.stringify(data, null, 2)))}
          >submit</Button>

          <br />

          <a style={style.register}>register</a>
        </div>
      </div>
    );
  }
}
