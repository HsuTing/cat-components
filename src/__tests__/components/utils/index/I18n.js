'use strict';

import timer from './../timer';

export default wrapper => {
  describe('## I18n', () => {
    expect(
      wrapper.find('UseI18n').children().find('div').text()
    ).toBe('Hello world');

    it('### change to a new language', async () => {
      wrapper.find('UseI18n').find('Button').first().simulate('click');

      await timer(3000);

      expect(
        wrapper.find('UseI18n').children().find('div').text()
      ).toBe('你好');
    });

    it('### change to an old language', () => {
      wrapper.find('UseI18n').find('Button').last().simulate('click');
      expect(
        wrapper.find('UseI18n').children().find('div').text()
      ).toBe('Hello world');
    });
  });
};
