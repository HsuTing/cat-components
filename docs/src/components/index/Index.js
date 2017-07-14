'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Markdown from 'react-markdown';
import ArrowUpward from 'react-icons/lib/md/arrow-upward';
import Wrapper from 'cat-components/lib/wrapper';
import I18n from 'cat-components/lib/i18n';
import Img from 'cat-components/lib/img';
import goToAnimation from 'cat-components/lib/goToAnimation';

import Normalize from './../share/Normalize';
import style from './style/index';
import text from './../text/index';

import Buttons from './Buttons';
import Content from './Content';
import * as constants from './constants';

@radium
@goToAnimation('body')
class Index extends React.Component {
  static propTypes = {
    goTo: PropTypes.func.isRequired
  }

  render() {
    const {goTo} = this.props;

    return (
      <div style={style.root}>
        <Normalize />

        <div style={style.titleRoot}>
          <a href='https://github.com/HsuTing/cat-components'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Img src='https://hsuting.github.io/img/icon.svg'
              style={style.icon}
            />
            <h1 style={style.title}>Cat components</h1>
          </a>
        </div>

        <Img link='https://npmjs.org/package/cat-components'
          target='_blank'
          src='https://badge.fury.io/js/cat-components.svg'
          style={style.statusImage}
        />

        {Object.keys(constants).map((name, nameIndex) => (
          <Buttons key={nameIndex}
            title={name}
            items={constants[name]}
          />
        ))}

        <div style={style.block}>
          <Markdown source={text} />
        </div>

        {Object.keys(constants).map((name, nameIndex) => (
          <div key={nameIndex}>
            {constants[name].map((item, itemIndex) => (
              <Content key={itemIndex}
                {...item}
              />
            ))}
          </div>
        ))}

        <ArrowUpward style={style.arrowUpward}
          onClick={() => goTo()}
        />
      </div>
    );
  }
}

/* eslint-disable */
export default ({redux, ...props}) => (
  <Wrapper redux={redux}
    modules={{redux: require('redux'), reactRedux: require('react-redux')}}
  >
    <I18n {...props}
      lang='en-us'
    >
      <Index />
    </I18n>
  </Wrapper>
);
/* eslint-enable */
