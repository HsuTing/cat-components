'use strict';

import timer from './../timer';

import checkGlobal from 'cat-components/lib/utils/checkGlobal';

export default wrapper => {
  it('## checkApi', async () => {
    expect(wrapper.find('UsecheckAPI').text()).toBe('Can not use "FB.api".');

    global.FB = 'FB';
    await timer(500);

    expect(wrapper.find('UsecheckAPI').text()).toBe('Can use "FB.api".');
  });

  it('## checkGlobal', () => {
    checkGlobal.add('FB', () => FB, () => {});

    expect(checkGlobal.variables).toMatchObject({
      FB: {
        value: 'FB'
      }
    });
  });
};
