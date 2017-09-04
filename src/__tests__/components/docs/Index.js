'use strict';

import React from 'react';
import renderer from 'react-test-renderer';

import Index from 'test-components/index/Index';
import redux from 'test-components/./../utils/redux';
import languageData from 'test-components/./../../public/i18n/en-us.json';
import useUrls from 'cat-components/lib/utils/useUrls';

import I18n from './utils/I18n';

describe('index', () => {
  useUrls(['/', '/multiple/'], {
    props: {
      defaultData: languageData,
      basename: 'http://hsuting.github.io/cat-components/public/i18n/',
      data: {},
      redux
    }
  }).forEach(({props}) => {
    it(`# '${props.router.location}'`, () => {
      const component = renderer.create(
        <Index {...props} />, {
          createNodeMock: element => {
            switch(element.type) {
              case 'div': return {
                childNodes: [{
                  offsetHeight: 0,
                  querySelector: id => ({
                    offsetTop: 0,
                    offsetHeight: 0
                  })
                }]
              };

              default:
                return null;
            }
          }
        }
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();

      tree.children.slice(-1)[0].props.onClick();
      tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    switch(props.router.location) {
      case '/': {
        describe(`# '/'`, () => {
          I18n(<Index {...props} />);
        });
        break;
      }
    }
  });
});
