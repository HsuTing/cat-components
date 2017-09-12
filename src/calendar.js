'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import moment from 'moment';

import * as style from './style/calendar';

export const calendarStyle = style;

@radium
export default class Calendar extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    start: PropTypes.number,
    end: PropTypes.number,
    format: PropTypes.string,
    isChosenStyle: PropTypes.object,
    getDate: PropTypes.func,
    date: PropTypes.shape({
      year: PropTypes.number,
      month: PropTypes.number,
      date: PropTypes.number
    }),
    defaultDate: PropTypes.shape({
      year: PropTypes.number,
      month: PropTypes.number,
      date: PropTypes.number
    })
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
    const {start, end, defaultDate} = props;
    const now = moment(defaultDate || {});
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
    this.scroll = this.scroll.bind(this);
  }

  componentDidMount() {
    this.scroll();

    /* istanbul ignore if */
    if(defaultDate)
      return;

    const {getDate, defaultDate} = this.props;
    const {date} = this.state;

    getDate(date);
  }

  componentWillReceiveProps(nextProps) {
    const {format, date} = nextProps;

    /* istanbul ignore if */
    if(date &&
      moment(date).format(format) !== 'Invalid date' &&
      JSON.stringify(date) !== JSON.stringify(this.state.date)
    ) {
      const {year, month} = this.state;
      const choices = {...this.state.choices};
      const maxDate = moment({
        year: date.year || year,
        month: date.month || month
      }).endOf('month').date();

      date.date = date.date > maxDate ? maxDate : date.date;
      choices.date = this.getChoice(maxDate);
      this.setState({
        date,
        choices
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextState.date) !== JSON.stringify(this.state.date);
  }

  componentDidUpdate() {
    this.props.getDate(this.state.date);
  }

  render() {
    const {format, isChosenStyle, ...props} = this.props;
    const {choices, date} = this.state;

    delete props.getDate;
    delete props.defaultDate;
    delete props.date;

    return (
      <div {...props}
        style={[style.root, this.props.style]}
      >
        <div style={[style.block, style.textBlock]}>
          {moment(date).format(format)}
        </div>

        <div style={style.choiceBlock}
          ref={node => (this.node = node)}
        >
          {Object.keys(choices).map((key, index) => (
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
                    id={data === value ? 'is-chosen' : ''}
                  >{data}</div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }

  getChoice(length, offset = 1) {
    return Array.apply({}, {length})
      .map((data, index) => (index + offset));
  }

  choose(key, value) {
    return () => {
      const date = {...this.state.date};
      const choices = {...this.state.choices};
      date[key] = value;
      const maxDate = moment({
        year: date.year,
        month: date.month
      }).endOf('month').date();

      date.date = date.date > maxDate ? maxDate : date.date;
      choices.date = this.getChoice(maxDate);
      this.setState({date, choices});
    };
  }

  scroll() {
    Array.from(this.node.childNodes)
      .forEach(node => {
        const childNode = node.querySelector('#is-chosen');

        node.scrollTop = childNode.offsetTop - (node.offsetHeight / 2) + (childNode.offsetHeight / 2);
      });
  }
}
