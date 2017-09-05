'use strict';

import {JSDOM} from 'jsdom';

export default wrapper => {
  it('## Alert', () => {
    const getDisplay = () => {
      return (new JSDOM(wrapper.find('Alert').children().last().html()))
        .window.document.querySelector('div').style.display;
    };
    expect(getDisplay()).toBe('none');
    wrapper.find('Alert').find('Button').simulate('click');
    expect(getDisplay()).toBe('');
  });
};
