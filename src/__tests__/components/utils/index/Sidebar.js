'use strict';

import {JSDOM} from 'jsdom';

export default wrapper => {
  describe('## Sidebar', () => {
    const getDisplay = () => {
      return (new JSDOM(wrapper.find('Sidebar').children().last().html()))
        .window.document.querySelector('div').style.display;
    };

    expect(getDisplay()).toBe('none');

    it('### show', () => {
      wrapper.find('Sidebar').find('Button').simulate('click');
      wrapper.find('Sidebar').find('Button').simulate('click');
      wrapper.find('Sidebar').children().last().simulate('animationEnd');
      expect(getDisplay()).toBe('');
    });

    it('### hide', () => {
      wrapper.find('Sidebar').find('h4').first().simulate('click');
      wrapper.find('Sidebar').children().last().simulate('animationEnd');
      expect(getDisplay()).toBe('none');
    });

    it('### hide with click background', () => {
      expect(getDisplay()).toBe('none');

      wrapper.find('Sidebar').find('Button').simulate('click');
      wrapper.find('Sidebar').children().last().simulate('animationEnd');

      expect(getDisplay()).toBe('');

      wrapper.find('Sidebar').find('aside').parent().childAt(0).simulate('click');
      wrapper.find('Sidebar').children().last().simulate('animationEnd');

      expect(getDisplay()).toBe('none');
    });
  });
};
