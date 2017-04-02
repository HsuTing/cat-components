'use strict';

import React from 'react';
import radium from 'radium';
import Markdown from 'react-markdown';

import Normalize from 'componentsShare/Normalize';

import style from './style/index';
import textGoogleDrive from './text/googleDrive';
import UseGoogleDrive from './UseGoogleDrive';

@radium
export default class Index extends React.Component {
  render() {
    return (
      <div style={style.root}>
        <Normalize />

        <div style={style.titleRoot}>
          <img src='http://hsuting.github.io/img/icon.svg'
               style={style.icon}
          />
          <h1 style={style.title}>Cat components</h1>
        </div>

        <div style={style.block}>
          <Markdown source={textGoogleDrive.join('\n')} />
          <UseGoogleDrive />
        </div>
      </div>
    );
  }
}
