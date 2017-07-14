'use strict';

export default example => `
# [Input](./#Input)
This is \`input\` tag with using \`validator\` to check value. For checking value in the server, you can use \`import {chcekInput} from 'cat-components/lib/input';\` and give this function \`value\` and \`rules\`.

If you want to use \`input\` with \`redux\`, you just need to change \`input\` to \`input-redux\`. You can see the example to know how to use it.

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

  Remeber to add \`formReducer\` in your \`combineReducers\`. Use \`import {formReducer} from 'cat-components/lib/input-redux';\` to import this \`reducer\`.

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
// component
${example}

// root component
import {combineReducers} from 'redux';
import {formReducer} from 'cat-components/lib/input-redux';

const reducers = combineReducers(formReducer);
// or
const reducers = combineReducers({
  yourReducer,
  ...formReducer
});
// Then, use to create store.
\`\`\`
`;
