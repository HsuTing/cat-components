'use strict';

export default example => `
# [layout](./#layout)
This is the style of \`layout\`.

-  [1.7.X deprecation] \`grid(padding)\` [func]

  This is a root of the \`layout\`. You can add \`padding\` to \`grid\`.

  - \`padding\` [object]

    This is an object of top, right, bottom and left. For example, it can be \`{left: 10}\`.

-  [1.7.X deprecation] \`col(num, padding)\` [func]

  Add this style in the \`grid\`.

-  [1.7.X deprecation] \`col_tablet(num, padding)\` [func]

  Add this style in the \`grid\` when \`max-width\` is smaller then \`839px\`.

-  [1.7.X deprecation] \`col_phone(num, padding)\` [func]

  Add this style in the \`grid\` when \`max-width\` is smaller then \`479px\`.

  - \`num\` [int, required]

    Set the column size for the cell. The \`num\` in the \`col\` is from 0 to 12. The \`num\` in the \`col_tablet\` is from 0 to 8. The \`num\` in the \`col_phone\` is from 0 to 4.

  - \`padding\` [object]

    This is an object of top, right, bottom and left. For example it can be \`{left: 10}\`.

- \`tablet(style)\` [func]

  Add style to \`tablet size\`.

- \`phone(style)\` [func]

  Add style to \`phone size\`.

  - \`style\` [object]

#### Example
\`\`\`js
${example}
\`\`\`
`;
