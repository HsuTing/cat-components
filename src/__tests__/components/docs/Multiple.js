'use strict';

import React from 'react';
import {shallow} from 'enzyme';

import Multiple from 'test-components/index/Multiple';

it('Multiple', () => {
  const wrapper = shallow(
    <Multiple data={{}} />
  );
  const shouldUpdate = wrapper.instance().shouldComponentUpdate();

  expect(shouldUpdate).toBe(false);
});
