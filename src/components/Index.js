'use strict';

import React from 'react';
import radium from 'radium';
import Markdown from 'react-markdown';

import Normalize from 'componentsShare/Normalize';

import style from './style/index';
import Button from './../Button';
import Img from './../Img';

import textGoogleDrive from './text/googleDrive';
import UseGoogleDrive from './UseGoogleDrive';
import textInput from './text/input';
import UseInput from './UseInput';
import textButton from './text/button';
import UseButton from './UseButton';
import textImg from './text/img';
import UseImg from './UseImg';

const components = [{
  name: 'GoogleDrive',
  component: UseGoogleDrive,
  text: textGoogleDrive
}, {
  name: 'Input',
  component: UseInput,
  text: textInput
}, {
  name: 'Button',
  component: UseButton,
  text: textButton
}, {
  name: 'Img',
  component: UseImg,
  text: textImg
}];

@radium
export default class Index extends React.Component {
  render() {
    return (
      <div style={style.root}>
        <Normalize />

        <div style={style.titleRoot}>
          <Img src='http://hsuting.github.io/img/icon.svg'
               style={style.icon}
          />
          <h1 style={style.title}>Cat components</h1>
        </div>

        <Img link='https://npmjs.org/package/cat-components'
             target='_blank'
             src='https://badge.fury.io/js/cat-components.svg'
             style={style.npm}
        />

        <div>
          {components.map((component, index) => {
            return (
              <Button key={index}
                      link={`./#${component.name}`}
              >{component.name}</Button>
            );
          })}
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
      </div>
    );
  }
}
