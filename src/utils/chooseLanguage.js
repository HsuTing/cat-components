'use strict';

import invariant from 'invariant';

export default language => (text = {}) => {
  invariant(
    text[language],
    `The version of "${language}" does not exist.`
  );

  return text[language];
}
