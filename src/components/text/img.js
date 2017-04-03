'use strict';

export default [
  '# Img',
  '',
  'Combine `a` tag and `img` tag in one component.',
  '',
  '#### Props',
  '- `link`: If you do not give a link, it will render a normal `img`.',
  '- `target`: This is used to `a` tag.',
  '',
  '#### Example',
  '```js',
  '\'use strict\';',
  '',
  'import React from \'react\';',
  'import Img from \'cat-components/lib/Img\';',
  '',
  'export default class Example extends React.Component {',
  '  render() {',
  '    return (',
  '      <Img src=\'http://hsuting.github.io/img/icon.svg\' />',
  '    );',
  '  }',
  '}',
  '```'
];
