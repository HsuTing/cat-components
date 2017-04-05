'use strict';

import React from 'react';
import radium from 'radium';
import Markdown from 'react-markdown';
import ArrowUpward from 'react-icons/lib/md/arrow-upward';

import Normalize from 'componentsShare/Normalize';

import style from './style/index';
import text from './text/index';
import GoTo from './../GoTo';
import Button from './../Button';
import Img from './../Img';

const components = [
  'GoogleDrive',
  'Input',
  'Button',
  'Img',
  'GoTo',
  'PictureSlideshow',
  'Square',
  'Menu',
  'Accordion',
  'Calendar'
].map(name => {
  return {
    name,
    text: require(`./text/${name[0].toLowerCase() + name.slice(1)}`).default,
    component: require(`./Use${name}`).default
  };
});

@radium
export default class Index extends React.Component {
  render() {
    return (
      <div style={style.root}>
        <Normalize />

        <div style={style.titleRoot}>
          <a href='https://github.com/HsuTing/cat-components'
             target='_blank'
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

        <div>
          {components.map((component, index) => {
            return (
              <GoTo key={index}
                    main='body'
                    target={`#${component.name}`}
              >
                <Button>{component.name}</Button>
              </GoTo>
            );
          })}
        </div>

        <div style={style.block}>
          <Markdown source={text.join('\n')} />
        </div>

        {components.map((component, index) => {
          return (
            <div key={index}
                 id={component.name}
                 style={style.block}
            >
              <Markdown source={component.text.join('\n')} />
              {React.createElement(component.component)}
            </div>
          );
        })}

        <GoTo main='body'>
          <ArrowUpward style={style.arrowUpward} />
        </GoTo>
      </div>
    );
  }
}
