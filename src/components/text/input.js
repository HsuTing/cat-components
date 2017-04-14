'use strict';

export default [
  '# [Input](./#Input)',
  'This is `input` tag with using `validator` to check value. For checking value in server, you can use `import chcekInput from \'cat-components/lib/utils/checkInput\';` and give this function `value` and `rules`.',
  '',
  '#### Other packages',
  '- [validator](https://github.com/chriso/validator.js/)',
  '',
  '#### Props',
  '- `type(default: text)`: This can be all type of `input`, and it can be `textarea`.',
  '- `rules(required)`: This is an array of `validator` and `message`.',
  '  - `validator(required)`: Use to check value. You can use function from `validator` with giving a name or write a function to check value. The parameters of function are `value` and `event`. This function need to return `true` or `false` to show if value is correct.',
  '  - `message(required)`: This message will be pushed to `error` when value is incorrect.',
  '  - `options`: This is the options of the `validator`.',
  '  - `not`: If this is true, the value does not pass the `validator`, the message will be pushed to `error`.',
  '- `onChange`: This function will be called when value is changed.',
  '- `onBlur`: This function will be called when input is not focus.',
  '- `value`: Give `input` a value. If this is set, you must write `onChange` function.',
  '',
  'The information of checking value will be given to `onChange` and `onBlur` as parameters. There will be an object and `event`. Object has `value`, `isError` and `error`.',
  '- `value`: This is a value of this `input`.',
  '- `isError`: This will be `false`, when `value` passes all test.',
  '- `error`: Messages will be pushed in `error` if `value` does not pass the test.',
  '',
  '#### Example',
  '```js',
  '\'use strict\';',
  '',
  'import React from \'react\';',
  'import Input from \'cat-components/lib/Input\';',
  '',
  'const rules = [{',
  '  validator: \'isEmpty\',',
  '  message: \'It can not be empty.\'',
  '}];',
  '',
  'export default class Example extends React.Component {',
  '  constructor(props) {',
  '    super(props);',
  '    this.state = {',
  '      value: \'test@gmail.com\',',
  '      isError: false,',
  '      error: []',
  '    };',
  '',
  '    this.onChange = this.onChange.bind(this);',
  '  }',
  '',
  '  render() {',
  '    const {value, isError, error} = this.state;',
  '',
  '    return (',
  '      <div>',
  '        <Input {...this.props}',
  '               rules={rules}',
  '               value={value}',
  '               onChange={this.onChange}',
  '        />',
  '',
  '        {error.map((err, index) => {',
  '          return (',
  '            <p key={index}',
  '               style={style.error}',
  '            >{err}</p>',
  '          );',
  '        })}',
  '      </div>',
  '    );',
  '  }',
  '',
  '  onChange(data) {',
  '    this.setState(data);',
  '  }',
  '}',
  '```'
];
