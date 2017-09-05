'use strict';

import React from 'react';
import {mount} from 'enzyme';
import {JSDOM} from 'jsdom';

import Dashboard from 'test-components/templates/dashboard/Dashboard';
import useUrls from 'cat-components/lib/utils/useUrls';

describe('[templates] Dashboard', () => {
  const {props} = useUrls(['/'], {})[0];
  const wrapper = mount(
    <Dashboard {...props} />
  );

  it('# show menu', () => {
    const getDisplay = wrapper => {
      return (new JSDOM(wrapper.find('aside').parent().html()))
        .window.document.querySelector('div').style.display;
    };

    expect(getDisplay(wrapper)).toBe('none');

    wrapper.find('header').find('svg').simulate('click');

    expect(getDisplay(wrapper)).toBe('');
  });

  it('# Link click', () => {
    wrapper.find('Link').first().simulate('click');
  });
});
