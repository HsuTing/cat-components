'use strict';

import React from 'react';
import radium from 'radium';
import moment from 'moment';

import style from './style/calendar';

@radium
export default class Calendar extends React.Component {
  static propTypes = {
    style: React.PropTypes.object,
    start: React.PropTypes.number,
    end: React.PropTypes.number,
    format: React.PropTypes.string,
    isChosenStyle: React.PropTypes.object,
    getDate: React.PropTypes.func
  }

  static defaultProps = {
    start: 1990,
    end: 2030,
    format: 'MMM D YYYY',
    isChosenStyle: style.isChosenStyle,
    getDate: () => {}
  }

  constructor(props) {
    super(props);
    const {start, end} = props;
    const now = moment();
    this.state = {
      choices: {
        year: this.getChoice(end - start + 1, start),
        month: this.getChoice(12),
        date: this.getChoice(moment().endOf('month').date())
      },
      date: {
        year: now.year(),
        month: now.month(),
        date: now.date()
      }
    };

    this.choose = this.choose.bind(this);
  }

  render() {
    const {format, isChosenStyle, getDate, ...props} = this.props;
    const {choices, date} = this.state;

    getDate(Object.assign({}, date, {month: date.month + 1}));

    return (
      <div {...props}
           style={[style.root, this.props.style]}
      >
        <div style={[style.block, style.textBlock]}>
          {moment(date).format(format)}
        </div>
        <div style={style.choiceBlock}>
          {Object.keys(choices).map((key, index) => {
            return (
              <div key={index}
                   style={style.choice}
              >
                {choices[key].map((data, dataIndex) => {
                  const value = key === 'month' ? date[key] + 1 : date[key];
                  const choiceStyle = data === value ? isChosenStyle : {};

                  return (
                    <div key={dataIndex}
                         style={choiceStyle}
                         onClick={this.choose(key, key === 'month' ? data - 1 : data)}
                    >{data}</div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  getChoice(length, offset = 1) {
    return Array.apply(null, {length})
      .map((data, index) => (index + offset));
  }

  choose(key, value) {
    return e => {
      const {choices, date} = this.state;
      date[key] = value;
      const maxDate = moment({
        year: date.year,
        month: date.month
      }).endOf('month').date();

      date.date = date.date > maxDate ? maxDate : date.date;
      choices.date = this.getChoice(maxDate);
      this.setState({date});
    };
  }
}
