'use strict';

import React from 'react';
import radium from 'radium';

import style from 'componentsStyle/useInput';

import Input from './../Input';

const rules = [{
  validator: 'isEmpty',
  message: 'It can not be empty.'
}, {
  validator: 'isEmail',
  message: 'It must be a email.'
}, {
  validator: value => value !== 'hsuting0106@gmail.com',
  message: 'This email must be "hsuting0106@gmail.com".'
}];

@radium
class UseInputItem extends React.Component {
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
        <Input {...this.props}
               style={isError ? style.inputError : {}}
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
export default class UseInput extends React.Component {
  render() {
    return (
      <div>
        <UseInputItem />
        <UseInputItem type='textarea' />
      </div>
    );
  }
}
