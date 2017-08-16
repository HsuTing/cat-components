'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import moment from 'moment';

const timeTypes = {
  hour: PropTypes.number,
  minute: PropTypes.number,
  second: PropTypes.number,
  millisecond: PropTypes.number
};

@radium
export default class VideoSubtitle extends React.Component {
  static propTypes = {
    subtitle: PropTypes.arrayOf(
      PropTypes.shape({
        ...timeTypes,
        content: PropTypes.func.isRequired
      })
    ).isRequired,
    now: PropTypes.shape(timeTypes).isRequired
  }

  constructor(props) {
    super(props);
    this.subtitle = this.sortSubtitle(props.subtitle);
  }

  componentWillReceiveProps(nextProps) {
    if(JSON.stringify(nextProps.subtitle) !== JSON.stringify(this.props.subtitle))
      this.subtitle = this.sortSubtitle(nextProps.subtitle);
  }

  render() {
    const {now, ...props} = this.props;
    const nowTime = moment(now).format('x');

    delete props.subtitle;

    return (
      <div {...props}>
        {this.subtitle.map(({content, time}, index) => (
          React.cloneElement(content(
            nowTime === time ||
            (nowTime > time && nowTime < (this.subtitle[index + 1] || {}).time)
          ), {
            key: index
          })
        ))}
      </div>
    );
  }

  sortSubtitle(subtitle) {
    return subtitle.map(({content, ...time}) => ({
      content,
      originTime: time,
      time: moment(time).format('x')
    })).sort((a, b) => {
      return a.time - b.time;
    });
  }
}
