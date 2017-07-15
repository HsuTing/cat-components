'use strict';

export default example => `
# [Button](./#Button)
Combine \`a\` tag and \`button\` tag in one component with custom style.

#### Props
- \`link\` [string]

  If you do not give a link, it will render a normal \`button\`.

- \`target\` [string]

  This is used for \`a\` tag.

#### Example
\`\`\`js
${example}
\`\`\`
`;
