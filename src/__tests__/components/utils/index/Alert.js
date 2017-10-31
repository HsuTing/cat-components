'use strict';

export default wrapper => {
  describe('## Alert', () => {
    const getDisplay = display => {
      expect(
        wrapper.find('Alert').find('Template').children().prop('style')
          .reduce((result, style = {}) => (
            style.display || result
          ), '')
      ).toBe(display);
    };
    const click = index => {
      wrapper.find('Alert').find('Button').at(index).simulate('click');
      wrapper.find('Alert').find('Template').simulate('animationEnd');
    };
    const testHide = () => {
      wrapper.find('Alert').find('svg').simulate('click');
      wrapper.find('Alert').find('svg').simulate('click');
      wrapper.find('Alert').find('Template').simulate('animationEnd');
      getDisplay('none');
    };

    describe('### default alert', () => {
      it('#### show', () => {
        getDisplay('none');
        click(0);
        getDisplay('');
      });

      it('#### hide', () => {
        testHide();
      });
    });

    describe('### custom alert', () => {
      it('#### show', () => {
        getDisplay('none');
        click(1);
        click(1);
        getDisplay('');
      });

      it('#### hide', () => {
        testHide();
      });
    });
  });
};
