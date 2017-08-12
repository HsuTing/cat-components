'use strict';

export default example => `
# [layout](./#layout)
This is the style of \`layout\`.

- \`tablet(style)\` [func]

  Add style to \`tablet size (480px ~ 839px)\`.

- \`phone(style)\` [func]

  Add style to \`phone size (0px ~ 479px)\`.

  - \`style\` [object]

#### Example
\`\`\`js
${example}
\`\`\`
`;
