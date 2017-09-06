'use strict';

export default example => `
# [Accordion](./#Accordion)

#### Props
- \`children\` [array of component, required]

  Each children must only have two childrens.

- \`index\` [index, required]

  This is the index of \`accordion\`. Use to choose the children component which should be shown.

- \`animationStyles\` [array]

  Use to modify the animation of showing or hiding the \`accordion\`. It must be an array like \`[hideStyle, ..., showStyle]\`. You can use many styles in this array.

#### Example
\`\`\`js
${example}
\`\`\`
`;
