'use strict';

export default example => `
# [Square](./#Square)
Make a square \`DOM\`. Remember that you do not set \`height\` of children \`DOM\`. If you set \`height\`, it will overwrite the \`height\` of \`Square\`.

#### Other packages
- [uuid](https://www.npmjs.com/package/uuid)

#### Props
- \`children\` [component, required]

#### Example
\`\`\`js
${example}
\`\`\`
`;
