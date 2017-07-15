'use strict';

export default example => `
# [layout](./#layout)
This is the style of \`layout\`.

- \`grid(padding)\` [func]

  This is a root of the \`layout\`. You can add \`padding\` to \`grid\`.

  - \`padding\` [object]

    This is an object of top, right, bottom and left. For example, it can be \`{left: 10}\`.

- \`col(num, padding)\` [func]

  Add this style in the \`grid\`.

  - \`num\` [int, required]

    Set the column size for the cell, from 0 to 12.

  - \`padding\` [object]

    This is an object of top, right, bottom and left. For example it can be \`{left: 10}\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
