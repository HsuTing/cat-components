'use strict';

import {JSDOM} from 'jsdom';

export default wrapper => {
  it('## Input', () => {
    const getBorderColor = () => {
      return (new JSDOM(wrapper.find('UseReduxWithNoDefaultValue').find('input').html()))
        .window.document.querySelector('input').style.borderColor;
    };

    expect(getBorderColor()).toBe('#000000');

    wrapper.find('UseReduxWithNoDefaultValue').find('input').simulate('change', {
      target: {
        value: 'hsuting0106'
      }
    });

    expect(getBorderColor()).toBe('#f44336');

    wrapper.find('UseReduxWithNoDefaultValue').find('Button').simulate('click');
  });
};
