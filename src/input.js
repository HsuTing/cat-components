'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import style from 'style/input';

import check from './input/check';

export const inputCheck = check;

@radium
export default class Input extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    style: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    rules: PropTypes.arrayOf(
      PropTypes.shape({
        validator: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.func
        ]).isRequired,
        message: PropTypes.string.isRequired,
        options: PropTypes.object,
        not: PropTypes.bool
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
    const {value} = this.props;

    this.onChange({
      target: {
        value: value || '',
      }
    });
  }

  componentWillUpdate(nextProps, nextState) {
    const value = nextProps.value || '';

    if(value !== nextState.value)
      this.onChange({
        target: {
          value
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
      props.type === 'textarea' ? 'textarea' : 'input', {
        ...props,
        style: newStyle.concat([props.style]),
        value,
        onChange: this.onChange,
        onBlur: this.onBlur
      }
    );
  }

  validator(func = () => {}) {
    return e => {
      const {rules} = this.props;
      const value = e.target.value;
      const output = check(value, rules, e);
      const newOutput = {...output, ...func(output, e)};

      this.setState(newOutput);
    };
  }
}
