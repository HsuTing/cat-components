'use strict';

export default time => new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, time);
});
