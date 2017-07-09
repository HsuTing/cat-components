'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import invariant from 'invariant';

import style from 'style/input';
import inputCheck from 'utils/inputCheck';

@radium
export default class Input extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    rules: PropTypes.arrayOf(
      PropTypes.shape({
        validator: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.func
        ]).isRequired,
        message: PropTypes.string.isRequired
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
      const output = inputCheck(value, rules, e);
      const newOutput = {...output, ...func(output, e)};

      this.setState(newOutput);
    };
  }
}
