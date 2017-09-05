'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Button from 'cat-components/lib/button';
import Link from 'cat-components/lib/link';
import Input, {inputConnect} from 'cat-components/lib/input-redux';

import * as style from './style/form';

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
export default class Field extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    inputDispatch: PropTypes.func.isRequired,
    submitDispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.fields = props.type === 'login' ?
      [...fields] :
      [...fields].concat(registerFields);
    this.enter = this.enter.bind(this);
    this.submit = this.submit.bind(this);
  }

  render() {
    const {type, form, inputDispatch} = this.props;

    return (
      <div style={style.root}>
        {this.fields.map(({type, name, rules}, index) => {
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
                onKeyDown={this.enter}
              />

              {
                !isError ?
                  null :
                  <p style={style.error}>{error.join(' ,')}</p>
              }
            </div>
          );
        })}

        <div style={style.buttonRoot}>
          <Button onClick={this.submit}
          >submit</Button>

          <br />

          <Link style={style.link}
            to={type === 'login' ? '/register/' : '/login/'}
          >{type === 'login' ? 'register' : 'cancel'}</Link>
        </div>
      </div>
    );
  }

  enter(e) {
    if(e.key === 'Enter')
      this.submit();
  }

  submit() {
    const {submitDispatch} = this.props;

    submitDispatch(data => {
      alert(JSON.stringify(data, null, 2))
    });
  }
}
