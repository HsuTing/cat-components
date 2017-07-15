'use strict';

export default example => `
# [Accordion](./#Accordion)

#### Props
- \`children\` [array of component, required]

  This children should be an array of \`StyleRoot\` in \`radium\`, and \`StyleRoot\` can only have two childrens.

- \`index\` [index, required]

  This is the index of \`accordion\`. Use to choose the children component which should be shown.

- \`contentStyle(isClicked)\` [func]

  Use to modify style when the children component is clicked.

  - \`isClicked\` [bool]

    If the children component is clicked, this will be \`true\`. You can use this to decide the style of the children component.

#### Example
\`\`\`js
${example}
\`\`\`
`;
