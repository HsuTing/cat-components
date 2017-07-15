'use strict';

export default example => `
# [checkAPI](./#checkAPI)
Use to check if some api library can be used like \`FB\`, \`gapi\`.

#### Arguments
- \`name\` [string, required]

  Use to identify api.

- \`func()\` [func, required]

  This must be a function which will return the global variable. For example, it will be like \`() => FB\`

- \`getData(callback)\` [func, default: callback => callback({})]

  This will be called when this library can be used.

  - \`callback()\` [func]

    If you want to add some data as \`props\`, you can give the data to \`callback\`. Here is the example:

    \`\`\`js
    @checkAPI('FB', () => FB,
      callback => {
        FB.login(response => {
          callback(response);
        });
      }
    )
    class ...
    \`\`\`

- \`defaultData\` [object, default: {}]

  This will be added to \`props\` in order to avoid the error with \`propTypes\` when you use \`callback\` in \`getData\`.

#### Props
- \`[name]CanUse\` [bool]

  Show if this library can be used.

#### Example
\`\`\`js
${example}
\`\`\`
`;
