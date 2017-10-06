'use strict';

const windowEvent = {};
window.addEventListener = jest.fn((event, cb) => {
  windowEvent[event] = cb;
});

export default wrapper => {
  describe('## Slider', () => {
    const getValue = () => {
      return wrapper.find('UseSlider').find('h5').text();
    };

    expect(getValue()).toBe('20');

    it('### chose value with click', () => {
      wrapper.find('UseSlider').find('Slider').last().simulate('click', {
        pageX: 0
      });

      expect(getValue()).toBe('0');
    });

    it('### chose value with drag', () => {
      wrapper.find('UseSlider').find('Slider').last().children().childAt(1).simulate('mouseDown', {
        pageX: 0
      });

      windowEvent.mousemove({pageX: 110});
      expect(getValue()).toBe('100');

      windowEvent.mousemove({pageX: -10});
      expect(getValue()).toBe('0');

      windowEvent.mousemove({pageX: 10});
      windowEvent.mouseup();
      expect(getValue()).toBe('10');
    });
  });
};
