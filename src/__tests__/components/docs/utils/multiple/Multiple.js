'use strict';

import React from 'react';
import {shallow} from 'enzyme';

import Multiple from 'test-components/index/Multiple';

export default () => {
  it('## should not update', () => {
    const wrapper = shallow(
      <Multiple data={{}} />
    );

    expect(
      wrapper.instance().shouldComponentUpdate()
    ).toBe(false);
  });
};
