'use strict';

import moment from 'moment';

const format = 'MMM D YYYY';

export default wrapper => {
  describe('## Calendar', () => {
    const getDate = () => {
      return wrapper.find('UseCalendar').find('Calendar').childAt(0).childAt(0).text();
    };
    const choose = (type, index) => {
      wrapper.find('UseCalendar').find('Calendar').find('#is-chosen')
        .at(type).parents().first()
        .childAt(index).simulate('click');
    };

    it('### choose a date', () => {
      expect(getDate()).toBe(moment().format(format));

      choose(1, 0);
      choose(2, 30);

      expect(getDate()).toBe(moment({
        month: 0,
        date: 31
      }).format(format));
    });

    it('### choose April', () => {
      choose(1, 3);

      expect(getDate()).toBe(moment({
        month: 3,
        date: 30
      }).format(format));
    });
  });
};
