'use strict';

export default example => `
# [Alert](./#Alert)
This use \`ReactDOM.render\` to make an alert. As a result, you need to add a \`DOM\` whose \`id\` is \`alert\` like \`<div id='alert' />\` or use \`id\` to set a new id for alert.

#### Props
- \`id\`: Use to set \`id\` for rendering \`alert\`.
- \`iconStyle\`: Use to set style of \`close icon\`.

#### Decorators
- alertBuilder
  - Props
    - \`alert\`: This is the function to build \`alert\`. The argument of this function is a react component.
    - \`hideAlert\`: This is the function to hide \`alert\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
