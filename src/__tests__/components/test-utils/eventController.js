'use strict';

import eventController from 'cat-components/lib/utils/eventController';

describe('eventController', () => {
  const event = () => {};

  describe('# add event', () => {
    it('## add', () => {
      eventController.addEvent = {
        name: 'test',
        id: 'id',
        event
      };

      expect(eventController.getEvents).toMatchObject({
        test: {
          id: event
        }
      });
    });

    it('## can not use same id', () => {
      expect(() => {
        eventController.addEvent = {
          name: 'test',
          id: 'id',
          event
        };
      }).toThrowError('"id" already exists in "test".');
    });

    it('## remove', () => {
      eventController.removeEvent = {
        name: 'test',
        id: 'id'
      };

      expect(eventController.getEvents).toMatchObject({
        test: {}
      });
    });

    it('## can not remove not exist', () => {
      expect(() => {
        eventController.removeEvent = {
          name: 'testt',
          id: 'id'
        };
      }).toThrowError('"id" does not exist in "testt".');
    });
  });
});
