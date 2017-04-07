'use strict';

export default [
  '# [Alert](./#Alert)',
  'Use to make an alert, but this is not a component. This is a class which have three functions, and use `ReactDOM.render` to make an alert. As a result, you need to add a `DOM` whose `id` is `alert` like `<div id=\'alert\' />` or use `alert.id` to set a new id for alert.',
  '',
  '#### Functions',
  '- `id`: Use to set `id` for rendering `alert`.',
  '- `show`: This function have three parameters. The first one is a component as alert. The second one is `iconStyle` which is used to modify the style of the icon. The last one is a function which is called when alert is shown.',
  '- `hide`: This function use to hide alert. The parameter is a function which is called when alert is hidden.',
  '',
  '#### Example',
  '```js',
  '\'use strict\';',
  '',
  'import React from \'react\';',
  'import Alert from \'cat-components/lib/Alert\';',
  '',
  'export default class Example extends React.Component {',
  '  constructor(props) {',
  '    super(props);',
  '',
  '    this.click = this.click.bind(this);',
  '  }',
  '',
  '  render() {',
  '    return (',
  '      <button>Alert</button>',
  '    );',
  '  }',
  '',
  '  click() {',
  '    Alert.show(',
  '      <div>',
  '        <h4>title</h4>',
  '        <p>Alert</p>',
  '      </div>',
  '    );',
  '  }',
  '}',
  '```'
];