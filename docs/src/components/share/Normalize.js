'use strict';

import React from 'react';
import radium, {Style as StyleRadium} from 'radium';
import normalize from 'radium-normalize';

const all = {
  letterSpacing: '0.8px'
};

const a = {
  fontWeight: 'bold',
  color: 'inherit',
  textDecoration: 'initial'
};

const pre = {
  padding: '16px',
  overflow: 'auto',
  fontSize: '85%',
  lineHeight: '1.45',
  backgroundColor: '#f6f8fa',
  borderRadius: '3px'
};

const code = {
  padding: '0.2em',
  margin: '0',
  fontSize: '85%',
  backgroundColor: 'rgba(27,31,35,0.05)',
  borderRadius: '3px'
};

const li = {
  margin: '8px 0px',
  lineHeight: '24px'
};

const p = {
  lineHeight: '24px'
};

@radium
export default class Normalize extends React.Component {
  render() {
    return (
      <style>
        <StyleRadium rules={normalize} />
        <StyleRadium scopeSelector='*'
          rules={all}
        />
        <StyleRadium scopeSelector='a'
          rules={a}
        />
        <StyleRadium scopeSelector='pre'
          rules={pre}
        />
        <StyleRadium scopeSelector='code'
          rules={code}
        />
        <StyleRadium scopeSelector='pre code'
          rules={{backgroundColor: 'initial'}}
        />
        <StyleRadium scopeSelector='li'
          rules={li}
        />
        <StyleRadium scopeSelector='p'
          rules={p}
        />
      </style>
    );
  }
}
