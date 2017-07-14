'use strict';

import React from 'react';
import radium from 'radium';

import Calendar from './../Calendar';

@radium
export default class UseCalendar extends React.Component {
  render() {
    return (
      <Calendar />
    );
  }
}
