'use strict';

import React from 'react';
import radium from 'radium';
import moment from 'moment';
import ArrowDropDownIcon from 'react-icons/lib/md/arrow-drop-down';
import Menu from 'cat-components/lib/menu';
import Calendar from 'cat-components/lib/calendar';
import Input from 'cat-components/lib/input';

import * as style from './style/inputDate';

const format = 'YYYY-MM-DD';
const now = moment();

@radium
export default class InputDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: now.format(format),
      isError: false,
      error: [],
      type: 'input'
    };

    this.key = '';
    this.getMomentDate = this.getMomentDate.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getDate = this.getDate.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  render() {
    const {value, isError, error} = this.state;

    return (
      <div style={style.root}>
        <Input style={style.input(isError)}
          maxLength={10}
          value={value}
          rules={[{
            validator: value => moment(this.getMomentDate(value)).format(format) === 'Invalid date',
            message: 'This is not a date.'
          }]}
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
          <Menu menuStyle={() => style.menu}
            menu={() => (
              <div onMouseMove={this.onMouseMove}>
                <Calendar getDate={this.getDate}
                  format={format}
                  defaultDate={{
                    year: now.year(),
                    month: now.month(),
                    date: now.date()
                  }}
                  date={this.getMomentDate(value)}
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

  getMomentDate(value) {
    const [year, month, date] = value.split('-');

    return {
      year: year ? parseInt(year) : now.year(),
      month: month ? parseInt(month) - 1 : 0,
      date: date ? parseInt(date) : 1
    };
  }

  onKeyDown(e) {
    this.key = e.key;
  }

  onChange({value, isError, error}, e) {
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
