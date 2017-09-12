'use strict';

import React from 'react';
import radium from 'radium';
import moment from 'moment';
import VideoSubtitle from 'cat-components/lib/video-subtitle';

import * as style from './style/useVideoSubtitle';

/* eslint-disable react/display-name */
const subtitle = [{
  minute: 11,
  second: 22
}, {
  minute: 10,
  second: 55
}, {
  minute: 11,
  second: 44
}, {
  hour: 1
}].map(({hour, minute, second}) => ({
  hour,
  minute,
  second,
  content: now => (
    <div style={now ? style.now : {}}>
      {moment({
        hour,
        minute,
        second
      }).format('HH : mm : ss')}
    </div>
  )
}));
/* eslint-enable react/display-name */

@radium
export default class UseVideoSubtitle extends React.Component {
  render() {
    return (
      <VideoSubtitle subtitle={subtitle}
        now={{
          minute: 11,
          second: 30
        }}
      />
    );
  }
}
