'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';
import moment from 'moment';
import CalendarTable from 'cat-components/lib/calendar-table';

import * as style from './style/useCalendarTable';

const now = moment();

/* eslint-disable react/prop-types */
const Cell = ({year, month, date, isBefore, isAfter, sameMonth, ...props}) => {
  const addStyle = [
    style.root
  ];

  if(!sameMonth)
    addStyle.push(style.notThisMonth);

  return (
    <StyleRoot {...props}
      style={addStyle}
    >
      <font style={!isBefore && !isAfter ? style.today : {}}>
        {`
          ${date === 1 ? `${moment({year, month, date}).format('MMM')} ` : ''}
          ${date}
        `}
      </font>
    </StyleRoot>
  );
};
/* eslint-enable react/prop-types */

@radium
export default class UseCalendarTable extends React.Component {
  render() {
    return (
      <CalendarTable month={now.month()}>
        <Cell />
      </CalendarTable>
    );
  }
}
