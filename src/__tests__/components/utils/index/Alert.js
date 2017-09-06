'use strict';

import {JSDOM} from 'jsdom';

export default wrapper => {
  describe('## Alert', () => {
    const getDisplay = () => {
      return (new JSDOM(wrapper.find('Alert').children().last().html()))
        .window.document.querySelector('div').style.display;
    };
    const click = index => {
      wrapper.find('Alert').find('Button').at(index).simulate('click');
      wrapper.find('Alert').children().last().simulate('animationEnd');
    };
    const testHide = () => {
      wrapper.find('Alert').find('svg').simulate('click');
      wrapper.find('Alert').children().last().simulate('animationEnd');
      expect(getDisplay()).toBe('none');
    };

    describe('### default alert', () => {
      expect(getDisplay()).toBe('none');

      it('#### show', () => {
        click(0);
        expect(getDisplay()).toBe('');
      });

      it('#### hide', () => {
        testHide();
      });
    });

    describe('### custom alert', () => {
      expect(getDisplay()).toBe('none');

      it('#### show', () => {
        click(1);
        click(1);
        expect(getDisplay()).toBe('');
      });

      it('#### hide', () => {
        testHide();
      });
    });
  });
};
