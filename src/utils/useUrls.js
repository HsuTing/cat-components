'use strict';

export default (
  urls = [],
  {name, props, ...options}
) => urls.map(url => ({
  ...options,
  name: `${name}${url === '/' ? '' : `${url.slice(0, url.length - 1)}`}`,
  props: {
    ...(props || {}),
    router: {
      isServer: true,
      location: url,
      context: {}
    }
  }
}));
