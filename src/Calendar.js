'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import moment from 'moment';

import style from './style/calendar';

@radium
export default class Calendar extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    start: PropTypes.number,
    end: PropTypes.number,
    format: PropTypes.string,
    isChosenStyle: PropTypes.object,
    getDate: PropTypes.func
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

  componentDidMount() {
    const {getDate} = this.props;
    const {date} = this.state;

    getDate(Object.assign({}, date, {month: date.month + 1}));
  }

  render() {
    const {format, isChosenStyle, ...props} = this.props;
    const {choices, date} = this.state;

    delete props.getDate;

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
      const {getDate} = this.props;
      const {choices, date} = this.state;
      date[key] = value;
      const maxDate = moment({
        year: date.year,
        month: date.month
      }).endOf('month').date();

      date.date = date.date > maxDate ? maxDate : date.date;
      choices.date = this.getChoice(maxDate);
      getDate(Object.assign({}, date, {month: date.month + 1}));
      this.setState({date});
    };
  }
}
