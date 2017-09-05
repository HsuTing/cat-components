'use strict';

import timer from './../timer';

export default wrapper => {
  it('## I18n', async () => {
    expect(
      wrapper.find('UseI18n').children().find('div').text()
    ).toBe('Hello world');

    wrapper.find('UseI18n').find('Button').first().simulate('click');

    await timer(3000);

    expect(
      wrapper.find('UseI18n').children().find('div').text()
    ).toBe('你好');
  });
};
