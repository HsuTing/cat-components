'use strict';

import {JSDOM} from 'jsdom';

export default wrapper => {
  describe('## Accordion', () => {
    const getOverflow = index => {
      return (new JSDOM(wrapper.find('UseAccordion').childAt(index + 2).html()))
        .window.document.querySelector('p').style.overflow;
    };
    const click = index => {
      wrapper.find('UseAccordion').childAt(index + 2).simulate('click');
    };

    expect(getOverflow(0)).toBe('scroll');
    expect(getOverflow(1)).toBe('hidden');

    it('### click second item', () => {
      click(1);
      expect(getOverflow(0)).toBe('hidden');
      expect(getOverflow(1)).toBe('scroll');
    });

    it('### click second item again', () => {
      click(1);
      expect(getOverflow(1)).toBe('hidden');
    });
  });
};
