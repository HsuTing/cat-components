'use strict';

export default wrapper => {
  describe('## Sidebar', () => {
    const getDisplay = () => (wrapper.find('Sidebar')
      .find('Template')
      .prop('rootStyle') || {display: ''}).display;

    it('### show', () => {
      expect(getDisplay()).toBe('none');
      wrapper.find('Sidebar').find('Button').simulate('click');
      wrapper.find('Sidebar').find('Button').simulate('click');
      wrapper.find('Sidebar').children().last().children().last().simulate('animationEnd');
      expect(getDisplay()).toBe('');
    });

    it('### hide', () => {
      wrapper.find('Sidebar').find('h4').first().simulate('click');
      wrapper.find('Sidebar').children().last().children().last().simulate('animationEnd');
      expect(getDisplay()).toBe('none');
    });

    it('### hide with click background', () => {
      expect(getDisplay()).toBe('none');

      wrapper.find('Sidebar').find('Button').simulate('click');
      wrapper.find('Sidebar').children().last().children().last().simulate('animationEnd');

      expect(getDisplay()).toBe('');

      wrapper.find('Sidebar').find('aside').parents().first().childAt(0).simulate('click');
      wrapper.find('Sidebar').children().last().children().last().simulate('animationEnd');

      expect(getDisplay()).toBe('none');
    });
  });
};
