'use strict';

import React from 'react';
import {mount} from 'enzyme';
import {JSDOM} from 'jsdom';

import useUrls from 'cat-components/lib/utils/useUrls';
import Dashboard from 'test-components/templates/dashboard/Dashboard';

describe('[templates] Dashboard', () => {
  const {props} = useUrls(['/'], {})[0];
  const wrapper = mount(
    <Dashboard {...props} />
  );

  it('# show menu', () => {
    const getDisplay = () => {
      return (new JSDOM(wrapper.find('aside').parents().first().html()))
        .window.document.querySelector('div').style.display;
    };

    expect(getDisplay()).toBe('none');

    wrapper.find('header').find('svg').simulate('click');

    expect(getDisplay()).toBe('');
  });

  it('# Link click', () => {
    wrapper.find('Link').first().simulate('click');
  });
});
