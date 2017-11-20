'use strict';

export default wrapper => {
  describe('## InputSelect', () => {
    it('### Choose a option', () => {
      expect(
        wrapper.find('InputSelect').prop('value')
      ).toBe('');
      expect(
        wrapper.find('InputSelect').prop('placeholder')
      ).toBe('Choose a option');

      wrapper.find('InputSelect')
        .find('Menu').children()
        .children().last()
        .childAt(0)
        .children()
        .children()
        .children().first()
        .simulate('click');

      expect(
        wrapper.find('InputSelect').prop('value')
      ).toBe('option 1');
    });
  });
};
