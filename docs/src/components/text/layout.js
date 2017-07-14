'use strict';

export default example => `
# [layout](./#layout)
This is the style of \`layout\`.

- \`grid\`: If you need to add \`padding\` to \`grid\`, add \`top\`, \`right\` and so on to argument.
- \`col\`: Give a number to set the column size for the cell, from 0 to 12. If you need to add \`padding\`, you can do the same thing like \`grid\` in the second argument.

#### Example
\`\`\`js
${example}
\`\`\`
`;
