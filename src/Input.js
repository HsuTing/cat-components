'use strict';

import React from 'react';
import radium from 'radium';
import validator from 'validator';
import invariant from 'invariant';

import style from './style/input';

@radium
export default class Input extends React.Component {
  static propTypes = {
    type: React.PropTypes.string,
    value: React.PropTypes.string,
    style: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    rules: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        validator: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.func
        ]).isRequired,
        message: React.PropTypes.string.isRequired
      })
    ).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isError: false,
      error: []
    };

    this.validator = this.validator.bind(this);
    this.onChange = this.validator(this.props.onChange).bind(this);
    this.onBlur = this.validator(this.props.onBlur).bind(this);
  }

  componentDidMount() {
    const {value, onChange} = this.props;

    if(value)
      invariant(
        onChange,
        'If you give a "value", you must use a "onChange" function to update this value.'
      );

    this.onChange({
      target: {
        value: value || '',
      }
    });
  }

  render() {
    const props = {...this.props};
    const {value} = this.state;
    const newStyle = [style.input];

    delete props.rules;

    if(props.type === 'textarea')
      newStyle.push(style.textarea);

    return React.createElement(
      props.type === 'textarea' ? 'textarea' : 'input',
      Object.assign(props, {
        style: newStyle.concat([props.style]),
        value,
        onChange: this.onChange,
        onBlur: this.onBlur
      })
    );
  }

  validator(func = () => {}) {
    return e => {
      const {rules} = this.props;
      const value = e.target.value;
      const error = [];

      rules.forEach(rule => {
        if(typeof rule.validator === 'string') {
          switch(rule.validator) {
            case 'isEmail':
              if(!validator.normalizeEmail(value, rule.options))
                error.push(rule.message);
              break;

            default:
              invariant(
                validator[rule.validator],
                `${rule.validator} is not in validator. You can write a function to use.`
              );

              if(validator[rule.validator](value, rule.options))
                error.push(rule.message);
              break;
          }
        } else {
          if(rule.validator(value, e))
            error.push(rule.message);
        }
      });

      const output = {
        value,
        isError: error.length !== 0,
        error
      };

      func(output, e);
      this.setState(output);
    };
  }
}
