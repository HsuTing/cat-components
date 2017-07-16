'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Markdown from 'react-markdown';
import Button from 'cat-components/lib/button';
import Link from 'cat-components/lib/link';

import style from './style/index';
import text from './../text/index';

import Buttons from './Buttons';
import Content from './Content';
import * as constants from './constants';

@radium
export default class Simple extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    const {data} = this.props;

    return (
      <div>
        {Object.keys(constants).map((name, nameIndex) => (
          <Buttons key={nameIndex}
            title={name}
            items={constants[name]}
          />
        ))}

        <div style={style.block}>
          <Markdown source={text} />
          <Link to='/multiple/'>
            <Button>Watch the examples of the multiple components</Button>
          </Link>
        </div>

        {Object.keys(constants).map((name, nameIndex) => (
          <div key={nameIndex}>
            {constants[name].map((item, itemIndex) => (
              <Content key={itemIndex}
                example={data[`Use${item.name}`] || ''}
                {...item}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
