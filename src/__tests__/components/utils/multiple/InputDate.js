'use strict';

export default wrapper => {
  describe('## InputDate', () => {
    it('### give a date', () => {
      wrapper.find('InputDate').find('Input').simulate('change', {
        target: {
          value: '2017-01-01'
        }
      });

      expect(
        wrapper.find('InputDate').find('Input').prop('value')
      ).toBe('2017-01-01');
    });

    it('### date type error', () => {
      wrapper.find('InputDate').find('Input').simulate('change', {
        target: {
          value: 'test'
        }
      });

      expect(
        wrapper.find('InputDate').find('span').text()
      ).toBe('This is not a date.');
    });

    it('### Use calendar to choose date', () => {
      wrapper.find('InputDate').find('Calendar').parents().first().simulate('mouseMove');
      wrapper.find('InputDate').find('Calendar').parents().first().simulate('mouseMove');
      wrapper.find('InputDate').find('Calendar').find('#is-chosen')
        .first().parents().first().childAt(0).simulate('click');

      expect(
        wrapper.find('InputDate').find('Input').prop('value')
      ).toBe('1990-01-01');
    });
  });
};
