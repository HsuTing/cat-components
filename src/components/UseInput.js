'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import style from 'componentsStyle/useInput';

import Input from './../Input';
import inputConnect from './../inputConnect';

const rules = [{
  validator: 'isEmpty',
  message: 'It can not be empty.'
}, {
  validator: 'isEmail',
  not: true,
  message: 'It must be a email.'
}, {
  validator: value => value !== 'hsuting0106@gmail.com',
  message: 'This email must be "hsuting0106@gmail.com".'
}];

@radium
class UseDefaultValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'test@gmail.com',
      isError: false,
      error: []
    };

    this.onChange = this.onChange.bind(this);
  }

  render() {
    const {value, isError, error} = this.state;

    return (
      <div>
        <Input style={isError ? style.inputError : {}}
          rules={rules}
          value={value}
          onChange={this.onChange}
        />

        {error.map((err, index) => {
          return (
            <p key={index}
              style={style.error}
            >{err}</p>
          );
        })}
      </div>
    );
  }

  onChange(data) {
    this.setState(data);
  }
}

@radium
@inputConnect('test_form')()
class UseRedux extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    inputDispatch: PropTypes.func.isRequired
  }

  render() {
    const {form, inputDispatch} = this.props;
    const {value, isError, error} = form.test_input || {};

    return (
      <div>
        <Input style={isError ? style.inputError : {}}
          rules={rules}
          value={value || 'test@gmail.com'}
          onChange={data => inputDispatch('test_input', data)}
        />

        {(error || []).map((err, index) => {
          return (
            <p key={index}
              style={style.error}
            >{err}</p>
          );
        })}
      </div>
    );
  }
}

export default () => ( // eslint-disable-line react/display-name
  <div>
    <h5>Type: input</h5>
    <Input rules={[]} />

    <h5>Type: textare</h5>
    <Input type='textarea'
           rules={[]}
    />

    <h5>Use default value</h5>
    <UseDefaultValue />

    <h5>Use redux</h5>
    <UseRedux />
  </div>
);
