'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Markdown from 'react-markdown';
import ArrowUpward from 'react-icons/lib/md/arrow-upward';

import Normalize from 'componentsShare/Normalize';
import style from 'componentsStyle/index';
import text from 'componentsText/index';

import I18n from './../I18n';
import Button from './../Button';
import Img from './../Img';
import goToAnimation from './../goToAnimation';

const components = [
  'Accordion',
  'Button',
  'Calendar',
  'CalendarTable',
  'Loading',
  'I18n',
  'Icon',
  'Img',
  'Input',
  'PictureSlideshow',
  'Slider',
  'Square',
  'Table',
  'Toggle'
].map(name => ({
  name,
  text: require(`./text/${name[0].toLowerCase() + name.slice(1)}`).default,
  component: require(`./Use${name}`).default
}));

const decorators = [
  //'Alert',
  'checkAPI',
  'goToAnimation',
  //'Menu',
  //'Sidebar',
].map(name => ({
  name,
  text: require(`./text/${name[0].toLowerCase() + name.slice(1)}`).default,
  component: require(`./Use${name}`).default
}));

@radium
@goToAnimation('body')
export default class Index extends React.Component {
  static propTypes = {
    goTo: PropTypes.func.isRequired
  }

  render() {
    const {goTo} = this.props;

    return (
      <I18n {...this.props}
            lang='en-us'
      >
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
            style={style.npm}
          />

          <h4>Components</h4>
          <div>
            {components.map((component, index) => (
              <Button key={index}
                onClick={() => goTo(`#${component.name}`)}
              >{component.name}</Button>
            ))}
          </div>

          <h4>Decorators</h4>
          <div>
            {decorators.map((decorator, index) => (
              <Button key={index}
                onClick={() => goTo(`#${decorator.name}`)}
              >{decorator.name}</Button>
            ))}
          </div>

          <div style={style.block}>
            <Markdown source={text} />
          </div>

          {components.map((component, index) => (
            <div key={index}
              id={component.name}
              style={style.block}
            >
              <Markdown source={component.text} />
              {React.createElement(component.component)}
            </div>
          ))}

          {decorators.map((decorator, index) => (
            <div key={index}
              id={decorator.name}
              style={style.block}
            >
              <Markdown source={decorator.text} />
              {React.createElement(decorator.component)}
            </div>
          ))}

          <ArrowUpward style={style.arrowUpward}
            onClick={() => goTo()}
          />
        </div>
      </I18n>
    );
  }
}
