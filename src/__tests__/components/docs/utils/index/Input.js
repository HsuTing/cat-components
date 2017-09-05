'use strict';

import {JSDOM} from 'jsdom';

export default wrapper => {
  describe('## Input', () => {
    it('### add value', () => {
      const getBorderColor = () => {
        return (new JSDOM(wrapper.find('UseReduxWithNoDefaultValue').find('Input').html()))
          .window.document.querySelector('Input').style.borderColor;
      };

      expect(getBorderColor()).toBe('#000000');

      wrapper.find('UseReduxWithNoDefaultValue').find('Input').simulate('change', {
        target: {
          value: 'hsuting0106'
        }
      });

      expect(getBorderColor()).toBe('#f44336');

      wrapper.find('UseReduxWithNoDefaultValue').find('Button').simulate('click');
    });

    it('### test blur', () => {
      wrapper.find('UseDefaultValue').find('Input').simulate('blur');
    });
  });
};
