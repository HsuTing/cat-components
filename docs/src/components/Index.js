'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Markdown from 'react-markdown';
import ArrowUpward from 'react-icons/lib/md/arrow-upward';

import Normalize from 'componentsShare/Normalize';
import style from 'componentsStyle/index';
import text from 'componentsText/index';

import Wrapper from './../Wrapper';
import I18n from './../I18n';
import Button from './../Button';
import Img from './../Img';
import goToAnimation from './../goToAnimation';

const styles = [
  'color',
  'layout'
].map(name => ({
  name,
  text: require(`./text/${name[0].toLowerCase() + name.slice(1)}`).default,
  component: (name => {
    switch(name) {
      case 'color':
        return false;

      default:
        return require(`./Use${name}`).default;
    }
  })(name)
}));

const components = [
  'Accordion',
  'Alert',
  'Button',
  'Calendar',
  'CalendarTable',
  'Loading',
  'I18n',
  'Icon',
  'Img',
  'Input',
  'Link',
  'Menu',
  'PictureSlideshow',
  'Sidebar',
  'Slider',
  'Square',
  'Table',
  'Toggle',
  'Wrapper'
].map(name => ({
  name,
  text: require(`./text/${name[0].toLowerCase() + name.slice(1)}`).default,
  component: (name => {
    switch(name) {
      case 'Link':
      case 'Wrapper':
        return false;

      default:
        return require(`./Use${name}`).default;
    }
  })(name)
}));

const decorators = [
  'checkAPI',
  'goToAnimation'
].map(name => ({
  name,
  text: require(`./text/${name[0].toLowerCase() + name.slice(1)}`).default,
  component: require(`./Use${name}`).default
}));

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

        <h4>Style</h4>
        <div>
          {styles.map((item, index) => (
            <Button key={index}
              onClick={() => goTo(`#${item.name}`)}
            >{item.name}</Button>
          ))}
        </div>

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

        {styles.map((item, index) => (
          <div key={index}
            id={item.name}
            style={style.block}
          >
            <Markdown source={item.text} />
            {item.component ? React.createElement(item.component) : null}
          </div>
        ))}

        {components.map((component, index) => (
          <div key={index}
            id={component.name}
            style={style.block}
          >
            <Markdown source={component.text} />
            {component.component ? React.createElement(component.component) : null}
          </div>
        ))}

        {decorators.map((decorator, index) => (
          <div key={index}
            id={decorator.name}
            style={style.block}
          >
            <Markdown source={decorator.text} />
            {decorator.component ? React.createElement(decorator.component) : null}
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
