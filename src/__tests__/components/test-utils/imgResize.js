'use strict';

import imgResize from 'cat-components/lib/utils/imgResize';

describe('imgResize', () => {
  it('# DOMs is an array', () => {
    expect(imgResize([{
      offsetWidth: 100,
      offsetHeight: 100,
      parentNode: {
        offsetWidth: 100,
        offsetHeight: 100
      },
      style: {}
    }])).toMatchObject([{
      width: '100%',
      height: 'initial'
    }]);
  });
});
