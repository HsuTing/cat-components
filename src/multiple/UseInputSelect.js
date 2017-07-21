'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import ArrowDropDownIcon from 'react-icons/lib/md/arrow-drop-down';
import Menu from 'cat-components/lib/menu';
import * as layoutStyle from 'cat-components/lib/layout';
import {inputStyle, inputCheck} from 'cat-components/lib/input';

import * as style from './style/inputSelect';

@radium
class Options extends React.Component {
  static propTypes = {
    choose: PropTypes.func.isRequired,
    choice: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.string
    ).isRequired
  }

  render() {
    const {choose, choice, hide, options} = this.props;

    return (
      <div>
        {options.map((option, optionIndex) => (
          <div key={optionIndex}
            style={style.option(optionIndex === options.length - 1, choice === option)}
            onClick={() => {
              hide();
              choose(option);
            }}
          >{option}</div>
        ))}
      </div>
    );
  }
}

@radium
class InputSelect extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.string
    ).isRequired,
    placeholder: PropTypes.string,
    rules: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = inputCheck(props.value, props.rules);
    this.choose = this.choose.bind(this);
  }

  componentDidMount() {
    const {value, isError, error} = this.state;

    this.props.onChange({
      value,
      isError,
      error
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.state.value)
      this.choose(nextProps.value);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value;
  }

  componentDidUpdate() {
    const {value, isError, error} = this.state;

    this.props.onChange({
      value,
      isError,
      error
    });
  }

  render() {
    const {options, placeholder} = this.props;
    const {value} = this.state;

    return (
      <Menu menuStyle={style.menu}
        menu={({hide}) => (
          <Options choose={this.choose}
            options={options}
            choice={value}
            hide={hide}
          />
        )}
        delay={0.1}
        trigger={['click']}
        animationStyles={[style.menuHideStyle, style.menuShowStyle]}
      >
        <div style={[layoutStyle.grid(), style.root]}>
          <div style={[inputStyle.input, style.input(value === '')]}>
            {value === '' ? placeholder : value}
          </div>

          <ArrowDropDownIcon style={style.icon} />
        </div>
      </Menu>
    );
  }

  choose(choice) {
    const {rules} = this.props;

    this.setState(inputCheck(choice, rules));
  }
}


// TODO: remove
export default () => ( // eslint-disable-line react/display-name
  <InputSelect value=''
    rules={[]}
    onChange={data => console.log(data)}
    placeholder='Choose a option'
    options={[
      'optino 1',
      'option 2',
      'option 3'
    ]}
  />
);
