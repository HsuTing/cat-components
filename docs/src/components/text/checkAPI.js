'use strict';

export default example => `
# [checkAPI](./#checkAPI)
Use to check if some api library can be used like \`FB\`, \`gapi\`.

#### Arguments
- \`name(required)\`: Use to identify api. You will get a bool as \`props\` with [name + CanUse] and you can use this to check if this library can be used.
- \`func(required)\`: This must be a function which will return the global variable.
- \`getData(default: callback => {})\`: This will be called when this library can be used. This argument is also a function and you can use this function to add some datas to \`props\`.
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
- \`defaultData(default: {})\`: This will be added to \`props\` in order to avoid error with \`propTyps\`.

#### Props
- \`[name]CanUse\`: Show if this library can be used.

#### Example
\`\`\`js
${example}
\`\`\`
`;
