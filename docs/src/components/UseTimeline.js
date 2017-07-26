'use strict';

import React from 'react';
import radium from 'radium';
import moment from 'moment';
import Timeline from 'cat-components/lib/timeline';

const format = 'MMMM Do YYYY';
const time = [{
  date: moment().format(format),
  content: 'Content 1'
}, {
  date: moment().subtract(1, 'days').format(format),
  content: 'Content 2'
}, {
  date: moment().subtract(2, 'days').format(format),
  content: 'Content 3'
}];

@radium
export default class UseTimeline extends React.Component {
  render() {
    return (
      <Timeline time={time} />
    );
  }
}
