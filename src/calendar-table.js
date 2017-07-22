'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import moment from 'moment';

import * as style from './style/calendarTable';

export const calendarTableStyle = style;

@radium
export default class CalendarTable extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.object,
    year: PropTypes.number,
    month: PropTypes.number.isRequired,
    date: PropTypes.number
  }

  static defaultProps = {
    year: moment().year(),
    date: moment().date()
  }

  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  render() {
    const {children, ...props} =  this.props;

    delete props.year;
    delete props.month;
    delete props.date;

    return (
      <div {...props}
        style={[style.root, props.style]}
      >
        {this.getData().map((d, dIndex) => (
          React.cloneElement(children, {
            key: dIndex,
            ...d
          })
        ))}
      </div>
    );
  }

  getData() {
    const {year, month, date} = this.props;
    const defaultTime = {year, month};
    const defaultDate = moment({year, month, date});
    const end = moment(defaultTime).endOf('month').endOf('week').add(1, 'd');
    const output = [];
    let now = moment(defaultTime).startOf('week');
    let count = 0;
    let isBefore = true;
    let isAfter = false;

    do {
      output.push({
        year: now.year(),
        month: now.month(),
        date: now.date(),
        isBefore,
        isAfter,
        sameMonth: now.month() === month
      });

      now = now.add(1, 'd');
      count = count + 1;

      if(!isBefore && !isAfter)
        isAfter = true;
      if(now.format('YYYY M D') === defaultDate.format('YYYY M D'))
        isBefore = false;
    } while(now.format('YYYY M D') !== end.format('YYYY M D') && count < 62);

    return output;
  }
}
