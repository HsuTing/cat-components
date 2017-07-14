'use strict';

export default example => `
# [Accordion](./#Accordion)
Use to make an accordion.

#### Props
- \`children(required)\`: This children should be an array of \`StyleRoot\` in \`radium\`, and \`StyleRoot\` can only have two childrens which are shown as \`title\` and \`content\`.
- \`index(required)\`: This is the index of \`accordion\`. Use to choose whose item should be shown.
- \`contentStyle\`: Use to modify style when the component is clicked. It is a function and the parameter is a boolean to show if the component is clicked. Then, you need to return a object to modify style.

#### Example
\`\`\`js
${example}
\`\`\`
`;
