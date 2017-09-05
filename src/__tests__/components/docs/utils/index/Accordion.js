'use strict';

import {JSDOM} from 'jsdom';

export default wrapper => {
  it('## Accordion', () => {
    const getOverflow = index => {
      return (new JSDOM(wrapper.find('UseAccordion').find('StyleRoot').at(index).html()))
        .window.document.querySelector('p').style.overflow;
    };
    const click = index => {
      wrapper.find('UseAccordion').find('StyleRoot').at(index).simulate('click');
    };

    expect(getOverflow(0)).toBe('scroll');
    expect(getOverflow(1)).toBe('hidden');
    click(1);
    expect(getOverflow(0)).toBe('hidden');
    expect(getOverflow(1)).toBe('scroll');
    click(1);
    expect(getOverflow(1)).toBe('hidden');
  });
};
