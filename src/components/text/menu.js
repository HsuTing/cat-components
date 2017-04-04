'use strict';

export default [
  '# [Menu](./#Menu)',
  'Use to make a menu.',
  '',
  '#### Props',
  '- `children(required)`',
  '- `menu(required)`: This is an object of `menu`.',
  '  - `component(required)`: This component will be shown as `menu`.',
  '  - `props`: If you need to give a `props` to `component`, you can use this. However, `style` in `props` will be used to add `style` in `component`.',
  '- `showStyle`: This is the animation of showing `menu`.',
  '- `hideStyle`: This is the animation of hiding `menu`.',
  '- `delay`: This is the delay time of hiding `menu`.',
  '',
  '#### Example',
  '```js',
  '\'use strict\';',
  '',
  'import React from \'react\';',
  'import Menu from \'cat-components/lib/Menu\';',
  '',
  'class Template extends React.Component {',
  '  render() {',
  '    return(',
  '      <p>menu</p>',
  '    );',
  '  }',
  '}',
  '',
  'export default class Example extends React.Component {',
  '  render() {',
  '    return (',
  '      <Menu menu={{component: Template}}>',
  '        <button>menu</button>',
  '      </Menu>',
  '    );',
  '  }',
  '}',
  '```'
];
