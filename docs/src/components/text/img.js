'use strict';

export default example => `
# [Img](./#Img)
Combine \`a\` tag and \`img\` tag in one component. This component will not render the \`img\` immediately. This component will render \`img\` after the \`img\` is loaded.

#### Props
- \`type\` [string, default: 'img']

  Use to set the type of the \`img\`.

- \`link\` [string]

  If you do not give a link, it will render a normal \`img\`.

- \`target\` [string]

  This is used for \`a\` tag.

- \`src\` [string, required]

  This is the link of the \`img\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
