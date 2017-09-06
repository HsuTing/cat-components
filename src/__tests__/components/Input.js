'use strict';

import {inputCheck} from 'cat-components/lib/input';

describe('inputCheck', () => {
  it('# not give rule', () => {
    expect(inputCheck('value'))
      .toMatchObject({
        value: 'value',
        isError: false,
        error: []
      });
  });

  it('# can not be an email', () => {
    expect(inputCheck('hsuting0106@gmail.com', [{
      validator: 'isEmail',
      message: 'This can not be an email.'
    }])).toMatchObject({
      value: 'hsuting0106@gmail.com',
      isError: true,
      error: ['This can not be an email.']
    });
  });

  it('# not a boolean', () => {
    expect(inputCheck('test', [{
      validator: 'isBoolean',
      not: true,
      message: 'This is not a boolean'
    }])).toMatchObject({
      value: 'test',
      isError: true,
      error: ['This is not a boolean']
    });
  });
});
