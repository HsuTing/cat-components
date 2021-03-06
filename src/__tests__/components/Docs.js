'use strict';

import React from 'react';
import {mount} from 'enzyme';

import useUrls from 'cat-components/lib/utils/useUrls';
import Index from 'test-components/index/Index';
import redux from 'test-components/./../utils/redux';
import languageData from 'test-components/./../../public/i18n/en-us.json';

import testComponents from './utils/testComponents';

describe('docs', () => {
  useUrls(['/', '/multiple/'], {
    props: {
      defaultData: languageData,
      basename: 'http://hsuting.github.io/cat-components/public/i18n/',
      data: {},
      redux
    }
  }).forEach(({props}) => {
    const wrapper = mount(
      <Index {...props} />
    );

    switch(props.router.location) {
      case '/':
        describe(`# '/'`, () => {
          testComponents(wrapper, 'index');

          afterAll(() => {
            wrapper.unmount();
          });
        });
        break;

      case '/multiple/':
        describe(`# '/multiple/'`, () => {
          testComponents(wrapper, 'multiple');

          afterAll(() => {
            wrapper.unmount();
          });
        });
        break;
    }
  });
});
