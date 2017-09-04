'use strict';

import {mount} from 'enzyme';

export default component => {
  it('# i18n', async () => {
    const wrapper = mount(component);

    expect(
      wrapper.find('UseI18n').children().find('div').text()
    ).toBe('Hello world');

    wrapper.find('UseI18n').find('Button').first().simulate('click');

    expect(await new Promise(resolve => {
      setTimeout(() => {
        resolve(
          wrapper.find('UseI18n').children().find('div').text()
        );
      }, 1000);
    })).toBe('你好');
  });
};
