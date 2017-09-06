'use strict';

import React from 'react';
import RadioButtonCheckedIcon from 'react-icons/lib/md/radio-button-checked';
import RadioButtonUnchecked from 'react-icons/lib/md/radio-button-unchecked';

export default wrapper => {
  describe('## Toggle', () => {
    const getComponent = (index, clicked) => {
      return wrapper.find('UseToggle').find('Toggle').at(index).containsAnyMatchingElements([
        clicked ? <RadioButtonCheckedIcon /> : <RadioButtonUnchecked />
      ]);
    };
    const click = index => {
      wrapper.find('UseToggle').find('Toggle').at(index).simulate('click');
    };

    expect(getComponent(0, true)).toBe(true);
    expect(getComponent(1, false)).toBe(true);
    click(2);

    it('### click second radio', () => {
      click(1);
      expect(getComponent(0, false)).toBe(true);
      expect(getComponent(1, true)).toBe(true);
    });

    it('### click second radio again', () => {
      click(1);
      expect(getComponent(1, false)).toBe(true);
    });
  });
};
