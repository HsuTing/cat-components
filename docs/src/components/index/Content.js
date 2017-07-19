'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Markdown from 'react-markdown';

import * as style from './style/index';

@radium
export default class Content extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]).isRequired,
    component: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func
    ]).isRequired,
    example: PropTypes.string.isRequired
  }

  render() {
    const {name, text, component, example} = this.props;

    return (
      <div id={name}
        style={style.block}
      >
        <Markdown source={typeof text === 'string' ? text : text(example)} />

        {
          !component ?
            null: React.createElement(component)
        }
      </div>
    );
  }
}
