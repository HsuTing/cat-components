'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import moment from 'moment';
import ArrowDropDownIcon from 'react-icons/lib/md/arrow-drop-down';
import Menu from 'cat-components/lib/menu';
import Calendar from 'cat-components/lib/calendar';
import Input, {inputCheck} from 'cat-components/lib/input';

import * as style from './style/inputDate';

const format = 'YYYY-MM-DD';
const getMomentDate = value => {
  const [year, month, date] = value.split('-');

  return {
    year: year ? parseInt(year) : now.year(),
    month: month ? parseInt(month) - 1 : 0,
    date: date ? parseInt(date) : 1
  };
};


@radium
class InputDate extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    rules: PropTypes.array,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      ...inputCheck(props.value, props.rules),
      value: props.value,
      type: 'input',
    };

    this.key = '';
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getDate = this.getDate.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
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
      this.onChange(inputCheck(nextProps.value));
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
    const {rules} = this.props;
    const {value, isError, error} = this.state;

    return (
      <div style={style.root}>
        <Input style={style.input(isError)}
          maxLength={10}
          value={value}
          rules={rules}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />

        {
          !isError ?
            null :
            <span style={style.errorMessages}>
              {error.join(' ,')}
            </span>
        }

        <div style={style.iconRoot}>
          <Menu menuStyle={style.menu}
            menu={() => (
              <div onMouseMove={this.onMouseMove}>
                <Calendar getDate={this.getDate}
                  format={format}
                  defaultDate={{
                    year: now.year(),
                    month: now.month(),
                    date: now.date()
                  }}
                  date={getMomentDate(value)}
                />
              </div>
            )}
            delay={0.1}
          >
            <ArrowDropDownIcon style={style.icon} />
          </Menu>
        </div>
      </div>
    );
  }

  onKeyDown(e) {
    this.key = e.key;
  }

  onChange({value, isError, error}) {
    let newValue = value;

    if(this.key === 'Backspace') {
      if(value[value.length - 1] === '-')
        newValue = value.slice(0, value.length - 1);
    } else {
      const tempValue = value.replace(/-/g, '');

      newValue = ([
        tempValue.slice(0, 4),
        tempValue.slice(4, 6),
        tempValue.slice(6, 8)
      ]).filter(time => time !== '')
        .join('-');
    }

    this.setState({
      value: newValue,
      isError,
      error,
      type: 'input'
    });
  }

  onMouseMove() {
    const {type} = this.state;

    if(type === 'calendar')
      return;

    this.setState({type: 'calendar'});
  }

  getDate(date) {
    const {type} = this.state;

    if(type === 'input')
      return;

    const newDate = moment(date).format(format);
    this.setState({
      value: newDate,
      type: 'calendar'
    });
  }
}

const now = moment();

export default () => ( // eslint-disable-line react/display-name
  <InputDate value={now.format(format)}
    onChange={data => console.log(data)}
    rules={[{
      validator: value => moment(getMomentDate(value)).format(format) === 'Invalid date',
      message: 'This is not a date.'
    }]}
  />
);
