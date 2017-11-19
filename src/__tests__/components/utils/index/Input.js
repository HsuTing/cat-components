'use strict';

import red from 'cat-components/lib/color/red';

export default wrapper => {
  describe('## Input', () => {
    it('### add value', () => {
      const getBorderColor = () => wrapper.find('UseReduxWithNoDefaultValue')
        .find('Input').prop('style').border || '';

      expect(getBorderColor()).toBe('');

      wrapper.find('UseReduxWithNoDefaultValue').find('Input').simulate('change', {
        target: {
          value: 'hsuting0106'
        }
      });

      expect(getBorderColor()).toBe(`1px solid ${red}`);
    });

    it('### submit', () => {
      wrapper.find('UseReduxWithNoDefaultValue').find('Button').at(0).simulate('click');
    });

    it('### reset', () => {
      wrapper.find('UseReduxWithNoDefaultValue').find('Button').at(1).simulate('click');

      expect(
        wrapper.find('UseRedux').find('Input').prop('value')
      ).toBe('');

      expect(
        wrapper.find('UseReduxWithNoDefaultValue').find('Input').prop('value')
      ).toBe('');
    });

    it('### blur', () => {
      wrapper.find('UseDefaultValue').find('Input').simulate('blur');
    });
  });
};
