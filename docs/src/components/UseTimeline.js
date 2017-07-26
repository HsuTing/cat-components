'use strict';

import React from 'react';
import radium from 'radium';
import moment from 'moment';
import Timeline from 'cat-components/lib/timeline';

const format = 'MMMM Do YYYY';
const time = [{
  date: moment().format(format),
  content: <div>Content 1</div>
}, {
  date: moment().subtract(1, 'days').format(format),
  content: <div>Content 2</div>
}, {
  date: moment().subtract(2, 'days').format(format),
  content: <div>Content 3</div>
}];

@radium
export default class UseTimeline extends React.Component {
  render() {
    return (
      <Timeline time={time} />
    );
  }
}
