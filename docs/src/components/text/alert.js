'use strict';

export default example => `
# [Alert](./#Alert)
This use \`ReactDOM.render\` to make an alert. As a result, you need to add a \`DOM\` whose \`id\` is \`alert\` like \`<div id='alert' />\` in \`html\`. You can also use \`id\` to set a new id for alert.

You need to add \`Alert\` before you use \`alertBuilder\`.

#### Props
- \`id\` [string]

  Use to set \`id\` for rendering \`alert\`.

- \`iconStyle\` [object]

  Use to set style of \`close icon\`.

#### Decorators
- alertBuilder
  - Props
    - \`alert(component)\` [func]

      This is the function to build \`alert\`.

      - \`component\` [component, required]

    - \`hideAlert()\` [func]

      This is the function to hide \`alert\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
