'use strict';

import React from 'react';
import radium from 'radium';
import Calendar from 'cat-components/lib/calendar';

@radium
export default class UseCalendar extends React.Component {
  render() {
    return (
      <Calendar />
    );
  }
}
