'use strict';

export default wrapper => {
  it('## ImgZoom', () => {
    expect(
      wrapper.find('ImgZoom').children().length
    ).toBe(1);
    wrapper.find('ImgZoom').find('Img').simulate('click');
    expect(
      wrapper.find('ImgZoom').children().length
    ).toBe(2);
  });
};
