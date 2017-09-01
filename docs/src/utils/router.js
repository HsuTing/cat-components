'use strict';

export default {
  isServer: false,
  basename: (
    process.env.NODE_ENV === 'production' ?
      '/cat-components/' :
      '/cat-components/docs/'
  )
};
