'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Button from 'cat-components/lib/button';
import Input, {inputConnect} from 'cat-components/lib/input-redux';

import * as style from './style/useInput';

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

const errorMessage = (isError, error) => (
  !isError ?
    null :
    (error || []).map((err, index) => (
      <p key={index}
        style={style.error}
      >{err}</p>
    ))
);

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

        {errorMessage(isError, error)}
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
          value={value === undefined ? 'test@gmail.com' : value}
          onChange={data => inputDispatch('test_input', data)}
        />

        {errorMessage(isError, error)}
      </div>
    );
  }
}

@radium
@inputConnect('test_form')()
class UseReduxWithNoDefaultValue extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    inputDispatch: PropTypes.func.isRequired,
    submitDispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  render() {
    const {form, inputDispatch, submitDispatch} = this.props;
    const {value, isError, error} = form.test_input_no_default_value || {};

    return (
      <div>
        <Input style={isError ? style.inputError : {}}
          rules={rules}
          value={value === undefined ? '' : value}
          onChange={data => inputDispatch('test_input_no_default_value', data)}
        />

        {errorMessage(isError, error)}

        <Button onClick={() => submitDispatch(this.submit)}
        >Submit</Button>
      </div>
    );
  }

  submit(form) {
    alert(JSON.stringify(form, null, 2));
  }
}

export default () => ( // eslint-disable-line react/display-name
  <div>
    <h5>Use default value</h5>
    <UseDefaultValue />

    <h5>Use redux</h5>
    <UseRedux />

    <h5>Use redux with no default value</h5>
    <UseReduxWithNoDefaultValue />
  </div>
);
