'use strict';

import path from 'path';
import process from 'process';
import nunjucks from 'nunjucks';
import {minify} from 'html-minifier';
import {combineReducers} from 'redux';

import renderStatic from './../bin/core/static';
import {testReducer} from './utils/TestRedux';
import useUrls from './../utils/useUrls';

nunjucks.configure(path.resolve(process.cwd(), './views'));

const renderContent = content => (
  `<main id="root">${content}</main>\n`
);

describe('static', () => {
  describe('# normal render', () => {
    it('## index.html', () => {
      expect(renderStatic([{
        component: './lib/__tests__/utils/TestReact',
        name: 'index',
        template: 'test.html'
      }])).toMatchObject([{
        filename: 'index.html',
        content: renderContent('<div>test react</div>')
      }])
    });

    it('## test/index.html', () => {
      expect(renderStatic([{
        component: './lib/__tests__/utils/TestReact',
        name: 'test',
        template: 'test.html'
      }])).toMatchObject([{
        filename: 'test/index.html',
        content: renderContent('<div>test react</div>')
      }])
    });
  });

  it('# default template path', () => {
    expect(renderStatic([{
      component: './lib/__tests__/utils/TestReact',
      name: 'index'
    }])).toMatchObject([{
      filename: 'index.html',
      content: minify(nunjucks.render(
        'template.html', {
          content: '<div>test react</div>',
          ENV: false
        }
      ))
    }])
  });

  describe('# render redux', () => {
    it('## just reducer', () => {
      expect(renderStatic([{
        component: './lib/__tests__/utils/TestRedux',
        name: 'index',
        template: 'test.html',
        props: {
          redux: {
            reducer: combineReducers({testReducer})
          }
        }
      }])).toMatchObject([{
        content: renderContent('<div>test redux(origin state)</div>')
      }])
    });

    describe('## add preloadedState', () => {
      expect(renderStatic([{
        component: './lib/__tests__/utils/TestRedux',
        name: 'index',
        template: 'test.html',
        props: {
          redux: {
            reducer: combineReducers({testReducer}),
            preloadedState: {testReducer: 'preloaded state'}
          }
        }
      }])).toMatchObject([{
        content: renderContent('<div>test redux(preloaded state)</div>')
      }]);
    });
  });

  describe('# render router', () => {
    const urls = ['/', '/about/'];

    useUrls(urls, {
      component: './lib/__tests__/utils/TestRouter',
      name: 'index',
      template: 'test.html',
    }).forEach((config, index) => {
      it(`## render '${urls[index]}'`, () => {
        expect(renderStatic([config]))
          .toMatchObject([{
            content: renderContent(`<div data-radium="true"><div>router render ${
              urls[index] === '/' ? 'index' : 'about'
            }</div></div>`)
          }]);
      });
    });
  });
});
