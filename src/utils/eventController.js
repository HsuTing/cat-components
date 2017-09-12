'use strict';

class Controller {
  constructor() {
    this.events = {};
  }

  set addEvent(data) {
    if(!this.events[data.name])
      this.events[data.name] = {};

    if(!this.events[data.name][data.id]) {
      this.events[data.name][data.id] = data.event;
      this.runEvent();
    } else
      throw new Error(`"${data.id}" already exists in "${data.name}".`);
  }

  set removeEvent(data) {
    if(!this.events[data.name])
      this.events[data.name] = {};

    if(this.events[data.name][data.id]) {
      delete this.events[data.name][data.id];
      this.runEvent();
    } else
      throw new Error(`"${data.id}" does not exist in "${data.name}".`);
  }

  get getEvents() {
    return this.events;
  }

  runEvent(/* istanbul ignore next */ callback = () => {}) {
    const events = this.events;
    Object.keys(events)
      .forEach(key => {
        window.removeEventListener(key, callback);
        window.addEventListener(key, e => {
          const event = events[key];

          Object.keys(event).forEach(eventKey => {
            event[eventKey](e);
          });
        });
      });
  }
}

export default new Controller();
