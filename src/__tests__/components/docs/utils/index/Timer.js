'use strict';

import timer from './../timer';

export default wrapper => {
  it('## Timer', async () => {
    const defaultTime = '0 hr 0 min 0 sec 0 ms';
    const getTime = () => {
      return wrapper.find('UseTimer').text()
        .replace(/reset/g, '')
        .replace(/start/g, '')
        .replace(/stop/g, '');
    };

    expect(getTime()).toBe(defaultTime);

    // start
    wrapper.find('UseTimer').find('Button').at(0).simulate('click');
    await timer(50);
    // stop
    wrapper.find('UseTimer').find('Button').at(0).simulate('click');
    expect(getTime()).not.toBe(defaultTime);

    // restart
    wrapper.find('UseTimer').find('Button').at(1).simulate('click');
    expect(getTime()).toBe(defaultTime);
  });
};
