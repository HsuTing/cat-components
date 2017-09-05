'use strict';

export default wrapper => {
  describe('## InputSelect', () => {
    it('### Choose a option', () => {
      expect(
        wrapper.find('InputSelect').prop('value')
      ).toBe('');

      wrapper.find('InputSelect').find('option').first().simulate('click');

      expect(
        wrapper.find('InputSelect').prop('value')
      ).toBe('option 1');
    });
  });
};
