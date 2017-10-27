'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import areEqual from 'fbjs/lib/areEqual';
import Markdown from 'react-markdown';
import Button from 'cat-components/lib/button';
import Link from 'cat-components/lib/link';
import {language} from 'cat-components/lib/i18n';

import * as style from './style/index';
import text from './../text/index';

import Buttons from './Buttons';
import Content from './Content';
import * as constants from './constants';

@radium
@language
export default class Simple extends React.Component {
  static propTypes = {
    translate: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return (
      !areEqual(this.props.translate, nextProps.translate)
    );
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
