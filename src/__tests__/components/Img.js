'use strict';

import React from 'react';
import {mount} from 'enzyme';

import Img from 'cat-components/lib/img';

describe('Img', () => {
  it('# change src', () => {
    const wrapper = mount(
      <Img src='https://hsuting.github.io/public/img/icon.svg' />
    );

    wrapper.simulate('load');
    expect(wrapper.html()).toBe('<img src="https://hsuting.github.io/public/img/icon.svg">');

    wrapper.setProps({src: 'https://hsuting.github.io/public/img/intro/background.jpg'});
    wrapper.simulate('load');
    expect(wrapper.html()).toBe('<img src="https://hsuting.github.io/public/img/intro/background.jpg">');
  });
});
