'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';
import moment from 'moment';

import style from 'componentsStyle/useCalendarTable';

import CalendarTable from './../CalendarTable';

const now = moment();

/* eslint-disable react/prop-types */
const Cell = ({year, month, date, isBefore, isAfter, sameMonth, ...props}) => {
  let addStyle = {...style.default};

  if(!sameMonth)
    addStyle = {...addStyle, ...style.notThisMonth};

  return (
    <StyleRoot {...props}
               style={[props.style, addStyle]}
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
