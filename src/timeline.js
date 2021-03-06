'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';

import blue from 'color/blue';

import * as style from './style/timeline';
import * as layoutStyle from './layout';

@radium
class Item extends React.Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    content: PropTypes.element.isRequired,
    inverted: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    dateStyle: PropTypes.object
  }

  render() {
    const {date, content, inverted, type, dateStyle: propsDateStyle} = this.props;
    const check = inverted ? type !== 'left' : type === 'left';
    const dateStyle = check ? propsDateStyle : style.hide;
    const contentStyle = check ? style.hide : content.props.style || {};
    const tabletStyle = type === 'left' ? style.hide : style.init;

    return (
      <div>
        <StyleRoot style={[style.date(type), dateStyle, layoutStyle.tablet(tabletStyle)]}
        >{date}</StyleRoot>

        <StyleRoot {...content.props}
          style={[style.content(type), contentStyle, layoutStyle.tablet(tabletStyle)]}
        />
      </div>
    );
  }
}

@radium
export default class Timeline extends React.Component {
  static propTypes = {
    time: PropTypes.array.isRequired,
    color: PropTypes.string,
    dateStyle: PropTypes.object
  }

  static defaultProps = {
    color: blue
  }

  render() {
    const {time, color, ...props} = this.props;

    return (
      <div>
        {time.map((item, itemIndex) => (
          <StyleRoot key={itemIndex}
            style={style.root}
          >
            <Item {...item}
              {...props}
              inverted={Boolean(itemIndex % 2)}
              type='left'
            />

            <div>
              <svg style={style.svg}>
                <circle style={style.circle(color)}
                  cx='5'
                  cy='5'
                  r='5'
                />
              </svg>

              <div style={style.bar(color)} />
            </div>

            <Item {...item}
              {...props}
              inverted={Boolean(itemIndex % 2)}
              type='right'
            />
          </StyleRoot>
        ))}
      </div>
    );
  }
}
