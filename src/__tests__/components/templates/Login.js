'use strict';

import React from 'react';
import {mount} from 'enzyme';

import useUrls from 'cat-components/lib/utils/useUrls';
import Login from 'test-components/templates/login/Login';
import redux from 'test-components/./../utils/redux';

describe('[templates] Login', () => {
  useUrls(['/login/', '/register/'], {
    props: {
      redux
    }
  }).forEach(({props}) => {
    const wrapper = mount(
      <Login {...props} />
    );

    it('# form value error', () => {
      expect(wrapper.find('input').first().prop('value')).toBe('');

      wrapper.find('input').first().simulate('change', {
        target: {
          value: 'hsuting0106'
        }
      });

      expect(wrapper.find('input').first().prop('value')).toBe('hsuting0106');
      expect(wrapper.find('p').text()).toBe('This is not an email.');
    });

    it('# keydown enter', () => {
      wrapper.find('input').first().simulate('keydown', {
        key: 'a'
      });

      wrapper.find('input').first().simulate('keydown', {
        key: 'Enter'
      });
    });
  });
});
