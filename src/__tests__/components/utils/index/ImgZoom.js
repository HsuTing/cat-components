'use strict';

export default wrapper => {
  describe('## ImgZoom', () => {
    expect(
      wrapper.find('ImgZoom').find('Img').length
    ).toBe(1);

    it('### zoom in', () => {
      wrapper.find('ImgZoom').find('Img').simulate('click');
      wrapper.find('ImgZoom').find('StyleRoot').find('img').simulate('load');
      wrapper.find('ImgZoom').find('StyleRoot').find('img').simulate('animationEnd');
      expect(
        wrapper.find('ImgZoom').find('Img').length
      ).toBe(2);
    });

    it('### zoom out', () => {
      wrapper.find('ImgZoom').find('StyleRoot').find('img').simulate('click');
      wrapper.find('ImgZoom').find('StyleRoot').find('img').simulate('animationEnd');
      expect(
        wrapper.find('ImgZoom').find('Img').length
      ).toBe(1);
    });
  });
};
