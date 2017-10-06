'use strict';

export default wrapper => {
  describe('## Alert', () => {
    const getDisplay = object => {
      expect(
        wrapper.find('Alert').find('Template').prop('rootStyle')
      ).toMatchObject(object);
    };
    const click = index => {
      wrapper.find('Alert').find('Button').at(index).simulate('click');
      wrapper.find('Alert').find('Template').simulate('animationEnd');
    };
    const testHide = () => {
      wrapper.find('Alert').find('svg').simulate('click');
      wrapper.find('Alert').find('Template').simulate('animationEnd');
      getDisplay({display: 'none'});
    };

    describe('### default alert', () => {
      it('#### show', () => {
        getDisplay({display: 'none'});
        click(0);
        getDisplay({});
      });

      it('#### hide', () => {
        testHide();
      });
    });

    describe('### custom alert', () => {
      it('#### show', () => {
        getDisplay({display: 'none'});
        click(1);
        click(1);
        getDisplay({});
      });

      it('#### hide', () => {
        testHide();
      });
    });
  });
};
