'use strict';

export default example => `
# [Input](./#Input)
This is \`input\` tag with using \`validator\` to check value. For checking value in the server, you can use \`import {chcekInput} from 'cat-components/lib/input';\` and give this function \`value\` and \`rules\`.

If you want to use \`input\` with \`redux\`, you just need to change \`input\` to \`input-redux\`. You can see the example to know how to use it.

#### Other packages
- [validator](https://github.com/chriso/validator.js/)

#### Props
- \`type\` [string, default: text]

  This can be the all type of \`input\` tag, and it can be \`textarea\`.

- \`rules\` [array, required]

  This will give to \`chcekInput\` to check if value is correct.

  - \`validator(value, event)\` [func | string, required)

    Use to check value. You can use function from \`validator\` with giving a name or write a function to check value. You just need to return \`true\` or \`false\` to show if value is correct.

    - \`value\`

      This is the value of the \`input\`.

    - \`event\`

      This is the event of the \`input\`.

  - \`message\` [string, required]

    This message will be pushed to \`error\` when value is incorrect.

  - \`options\` [object]

    You can add other options for \`validator\`.

  - \`not\` [bool]

    Use to reverse the result.

- \`value\` [string, required]

  Give the \`input\` a value.

- \`onChange(data, event)\` [func, required]
- \`onBlur(data, event)\` [func]

  \`onChange\` will be called when the value of the \`input\` is changed. \`onBlur\` will be called when user is not focus on the \`input\`. Those functions can return an object like \`data\` and it will be added to the \`input\`.

  - \`data\` [object]

    This is the result of the \`inputCheck\` when a value give to the \`input\`.

    - \`value\` [string]

      This is a value of this \`input\`.

    - \`isError\` [bool]

      This is the result of the \`rules\`.

    - \`error\` [array]

      Here are the error messages when \`value\` does not pass the \`rules\`.

  - \`event\` [object]

    This is the event of the \`input\`.

#### Decorators
- inputConnect

  This is like \`connect\` in \`react-redux\`. It will return \`connect\` when you give a \`formName\`. So you can give the arguments to \`inputConnect\`, like \`inputConnect('test_form')(mapStateToProps, mapDispatchToProps, mergeProps, options)\`.

  Remeber to add \`formReducer\` in your \`combineReducers\`. Use \`import {formReducer} from 'cat-components/lib/input-redux';\` to import this \`reducer\`.

  - Other packages
    - [redux](https://github.com/reactjs/redux)
    - [react-redux](https://github.com/reactjs/react-redux)
  - Arguments
    - \`formName\` [string, required]

      Use to determine the form which should be used.

  - Props
    - \`form\` [object]

      This is the data of the form.

    - \`inputDispatch(inputName, value)\` [func]

      Use this function in the \`onChange\` function.

      - \`inputName\` [string]

        This is the name of the \`input\`. It will be used for \`redux\` to add \`value\` to \`form\`.

      - \`value\` [object]

        The value of the \`input\` is used to \`redux\`, and it will be like the result of the \`inputCheck\` which has \`value\`, \`isError\` and \`error\`.

    - \`submitDispatch(callback)\` [func]

      Owing to \`isSubmited\` in the \`form\`, you will not get the real \`isError\`. As a result, this is recommended that you should use this when you want to send the data to a server.

      - \`callback(form)\` [func]

        This will be called after \`isSubmited\` is changed in the \`form\`. This will get the real data of the \`form\`.
        - \`form\` [object]

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
