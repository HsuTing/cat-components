'use strict';

export default `
  # [Input](./#Input)
  This is \`input\` tag with using \`validator\` to check value. For checking value in server, you can use \`import chcekInput from 'cat-components/lib/utils/checkInput';\` and give this function \`value\` and \`rules\`.

  #### Other packages
  - [validator](https://github.com/chriso/validator.js/)

  #### Props
  - \`type(default: text)\`: This can be all type of \`input\`, and it can be \`textarea\`.
  - \`rules(required)\`: This is an array of \`validator\` and \`message\`.
    - \`validator(required)\`: Use to check value. You can use function from \`validator\` with giving a name or write a function to check value. The parameters of function are \`value\` and \`event\`. This function need to return \`true\` or \`false\` to show if value is correct.
    - \`message(required)\`: This message will be pushed to \`error\` when value is incorrect.
    - \`options\`: This is the options of the \`validator\`.
    - \`not\`: If this is true, the value does not pass the \`validator\`, the message will be pushed to \`error\`.
  - \`value(required)\`: Give \`input\` a value.
  - \`onChange(required)\`: This function will be called when value is changed.
  - \`onBlur\`: This function will be called when input is not focus.

  The information of checking value will be given to \`onChange\` and \`onBlur\` as parameters. There will be an object and \`event\`. Object has \`value\`, \`isError\` and \`error\`. If you return a new object, this will use new object to \`input\`.
  - \`value\`: This is a value of this \`input\`.
  - \`isError\`: This will be \`false\`, when \`value\` passes all test.
  - \`error\`: Messages will be pushed in \`error\` if \`value\` does not pass the test.

  #### Decorators
  - inputConnect

    This is like \`connect\` in \`react-redux\`. It will return \`connect\` when you give a \`formName\`. So you can give the arguments to \`inputConnect\`, like \`inputConnect('test_form')(mapStateToProps, mapDispatchToProps, mergeProps, options)\`.

    Remeber to add \`form\` in your \`combineReducers\`. Use \`import {form} from 'cat-components/lib/utils/inputRedux';\` to import this \`reducer\`.

    - Other packages
      - [redux](https://github.com/reactjs/redux)
      - [react-redux](https://github.com/reactjs/react-redux)
    - Arguments
      - \`formName(required)\`: Use to determine the form which should be used.
    - Props
      - \`form\`: This is the data of the form.
      - \`inputDispatch\`: Use this function in \`onChange\` function. The arguments of this function are a \`inputName\` and a data from \`onChange\`.

  #### Example
  \`\`\`js
  // rules
  const rules = [{
    validator: 'isEmpty',
    message: 'It can not be empty.'
  }];

  // use default value
  'use strict';

  import React from 'react';
  import Input from 'cat-components/lib/Input';

  export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'test@gmail.com'
        isError: false,
        error: []
      };

      this.onChange = this.onChange.bind(this);
    }

    render() {
      const {value, isError, error} = this.state;

      return (
        <div>
          <Input rules={rules}
            value={value}
            onChange={this.onChange}
          />

          {error.map((err, index) => {
            return (
              <p key={index}
                style={style.error}
              >{err}</p>
            );
          })}
        </div>
      );
    }

    onChange(data) {
      this.setState(data);
    }
  }

  // use redux
  'use strict';

  import React from 'react';
  import PropTypes from 'prop-types';
  import {combineReducers, createStore} from 'redux';
  import {Provider} from 'react-redux';
  import Input from 'cat-components/lib/Input';
  import inputConnect from 'cat-components/lib/inputConnect';
  import {form} from 'cat-components/lib/utils/inputRedux';

  @inputConnect('test_form')()
  class Example extends React.Component {
    static propTypes = {
      form: PropTypes.object.isRequired,
      inputDispatch: PropTypes.func.isRequired
    }

    render() {
      const {form, inputDispatch} = this.props;
      const {value, isError, error} = form.test_input || {};

      return (
        <div>
          <Input rules={rules}
            value={value === undefined ? 'test@gmail.com' : value}
            onChange={data => inputDispatch('test_input', data)}
          />

          {error.map((err, index) => {
            return (
              <p key={index}
                style={style.error}
              >{err}</p>
            );
          })}
        </div>
      );
    }
  }

  const reducers = combineReducers({form});
  const store = createStore(reducers);

  export default () => (
    <Provider store={store}>
      <Example />
    </Provider>
  );
  \`\`\`
`;
