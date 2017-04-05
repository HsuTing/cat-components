'use strict';

export default [
  '# [Calendar](./#Calendar)',
  'Use to make a calender.',
  '',
  '#### Props',
  '- `start`: This is the start of the year.',
  '- `end`: This is the end of the year.',
  '- `format`: You can use this to modify the format of the text. See [here](http://momentjs.com/docs/#/displaying/format/) to learn more information.',
  '- `isChosenStyle`: Use to modify style when date is chosen.',
  '- `getDate`: Use to get date.',
  '',
  '#### Example',
  '```js',
  '\'use strict\';',
  '',
  'import React from \'react\';',
  'import Calendar from \'cat-components/lib/Calendar\';',
  '',
  'export default class Example extends React.Component {',
  '  render() {',
  '    return (',
  '      <Calendar />',
  '    );',
  '  }',
  '}',
  '```'
];