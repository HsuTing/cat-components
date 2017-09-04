'use strict';

export default wrapper => {
  it('# I18n', async () => {
    expect(
      wrapper.find('UseI18n').children().find('div').text()
    ).toBe('Hello world');

    wrapper.find('UseI18n').find('Button').first().simulate('click');

    expect(await new Promise(resolve => {
      setTimeout(() => {
        resolve(
          wrapper.find('UseI18n').children().find('div').text()
        );
      }, 2000);
    })).toBe('你好');
  });
};
