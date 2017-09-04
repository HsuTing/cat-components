'use strict';

import React from 'react';
import renderer from 'react-test-renderer';

import Buttons from 'test-components/index/Buttons';

it('Buttons', () => {
  const component = renderer.create(
    <Buttons title='test'
      items={[{
        name: 'test'
      }]}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children.slice(-1)[0].children.slice(-1)[0].props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
