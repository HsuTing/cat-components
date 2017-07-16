'use strict';

import React from 'react';
import radium from 'radium';
import moment from 'moment';
import ArrowDropDownIcon from 'react-icons/lib/md/arrow-drop-down';
import Menu from 'cat-components/lib/menu';
import Calendar from 'cat-components/lib/calendar';
import Input from 'cat-components/lib/input';

import style from './style/inputDate';

const format = 'YYYY-MM-DD';
const now = moment();

@radium
export default class InputDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: now.format(format),
      isError: false,
      error: []
    };

    this.key = '';
    this.enter = this.enter.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  render() {
    const {value, isError, error} = this.state;
    const [year, month, date] = value.split('-');

    return (
      <div style={style.root}>
        <Input style={style.input(isError)}
          maxLength={10}
          value={value}
          rules={[{
            validator: 'isISO8601',
            not: true,
            message: 'This is not a date.'
          }]}
          onChange={this.onChange}
          onKeyDown={this.enter}
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
            menu={hide => (
              <Calendar getDate={this.getDate}
                format={format}
                defaultDate={{
                  year: now.year(),
                  month: now.month(),
                  date: now.date()
                }}
                date={{
                  year: year ? parseInt(year) : now.year(),
                  month: month ? parseInt(month) - 1 : 0,
                  date: date ? parseInt(date) : 1
                }}
              />
            )}
            delay={0.1}
          >
            <ArrowDropDownIcon style={style.icon} />
          </Menu>
        </div>
      </div>
    );
  }

  enter(e) {
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
      error
    });
  }

  getDate(date) {
    const newDate = moment(date).format(format);

    this.setState({
      value: newDate
    });
  }
}
