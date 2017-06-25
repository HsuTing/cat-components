'use strict';

import React from 'react';
import radium from 'radium';
import Markdown from 'react-markdown';
import ArrowUpward from 'react-icons/lib/md/arrow-upward';

import Normalize from 'componentsShare/Normalize';
import style from 'componentsStyle/index';
import text from 'componentsText/index';

import I18n from './../I18n';
import GoTo from './../GoTo';
import Button from './../Button';
import Img from './../Img';

const components = [
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
  'Table',
  'Toggle'
].map(name => ({
  name,
  text: require(`./text/${name[0].toLowerCase() + name.slice(1)}`).default,
  component: require(`./Use${name}`).default
}));

const decorators = [
  //'Accordion',
  //'Alert',
  'checkAPI',
  //'GoTo',
  //'Menu',
  //'Sidebar',
  //'Square',
].map(name => ({
  name,
  text: require(`./text/${name[0].toLowerCase() + name.slice(1)}`).default,
  component: require(`./Use${name}`).default
}));

@radium
export default class Index extends React.Component {
  render() {
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
              <GoTo key={index}
                main='body'
                target={`#${component.name}`}
              >
                <Button>{component.name}</Button>
              </GoTo>
            ))}
          </div>

          <h4>Decorators</h4>
          <div>
            {decorators.map((decorator, index) => (
              <GoTo key={index}
                main='body'
                target={`#${decorator.name}`}
              >
                <Button>{decorator.name}</Button>
              </GoTo>
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

          <GoTo main='body'>
            <ArrowUpward style={style.arrowUpward} />
          </GoTo>
        </div>
      </I18n>
    );
  }
}
