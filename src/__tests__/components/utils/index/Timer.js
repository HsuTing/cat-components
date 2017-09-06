'use strict';

import timer from './../timer';

export default wrapper => {
  describe('## Timer', () => {
    const defaultTime = '0 hr 0 min 0 sec 0 ms';
    const getTime = () => {
      return wrapper.find('UseTimer').text()
        .replace(/reset/g, '')
        .replace(/start/g, '')
        .replace(/stop/g, '');
    };

    expect(getTime()).toBe(defaultTime);

    it('### start and stop', async () => {
      wrapper.find('UseTimer').find('Button').at(0).simulate('click');
      wrapper.find('UseTimer').find('Button').at(0).simulate('click');

      await timer(50);

      wrapper.find('UseTimer').find('Button').at(1).simulate('click');
      wrapper.find('UseTimer').find('Button').at(1).simulate('click');
      expect(getTime()).not.toBe(defaultTime);
    });

    it('### restart', () => {
      wrapper.find('UseTimer').find('Button').at(2).simulate('click');
      expect(getTime()).toBe(defaultTime);
    });
  });
};
