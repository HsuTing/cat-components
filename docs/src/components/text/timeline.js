'use strict';

export default example => `
# [Timeline](./#Timeline)

#### Props
- \`time\` [array, required]

  - \`date\` [string, required]

    The \`date\` of the time is shown.

  - \`content\` [component, required]

    The \`content\` of the time is shown.

- \`color\` [string, default: '#2196f3']

  Change the color of the bar.

- \`dateStyle\` [object]

  Modify the style of the \`date\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
