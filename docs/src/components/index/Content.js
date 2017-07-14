'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Markdown from 'react-markdown';

import style from './style/index';

@radium
export default class Content extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func
    ]).isRequired
  }

  render() {
    const {name, text, component} = this.props;

    return (
      <div id={name}
        style={style.block}
      >
        <Markdown source={text} />

        {
          !component ?
            null: React.createElement(component)
        }
      </div>
    );
  }
}
