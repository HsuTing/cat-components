'use strict';

import {JSDOM} from 'jsdom';

export default wrapper => {
  describe('## PictureSlideshow', () => {
    const getBackground = index => {
      return (new JSDOM(wrapper.find('UsePictureSlideshow').find('Button').at(index).html()))
        .window.document.querySelector('button').style.background;
    };

    expect(getBackground(0)).toBe('rgb(96, 125, 139)');
    expect(getBackground(1)).toBe('rgb(255, 255, 255)');

    wrapper.find('UsePictureSlideshow').find('Img').forEach(n => n.simulate('load', {
      target: {
        offsetWidth: 100,
        offsetHeight: 100,
        parentNode: {
          offsetWidth: 100,
          offsetHeight: 100
        },
        style: {}
      }
    }));

    it('### click item 1', () => {
      wrapper.find('UsePictureSlideshow').find('Button').at(1).simulate('click');

      expect(getBackground(0)).toBe('rgb(255, 255, 255)');
      expect(getBackground(1)).toBe('rgb(96, 125, 139)');
    });

    it('### click item 0', () => {
      wrapper.find('UsePictureSlideshow').find('Button').at(0).simulate('click');

      expect(getBackground(1)).toBe('rgb(255, 255, 255)');
      expect(getBackground(0)).toBe('rgb(96, 125, 139)');
    });
  });
};
