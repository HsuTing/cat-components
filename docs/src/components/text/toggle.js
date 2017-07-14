'use strict';

export default example => `
# [Toggle](./#Toggle)
Use to make a Toggle.

#### Other packages
- [react-icons](https://gorangajic.github.io/react-icons/fa.html)

#### Props
- \`rootStyle\`: Use to modify style when the component is clicked. It is a function and the parameter is a boolean to show if the component is clicked. Then, you need to return a object to modify style.
- \`checked\`: Use to set default clicked.
- \`icons\`: You can use this to change icons. You need to give a object like \`{default: IconOne, clicked: IconTwo}\`.
- \`type(default: 'checkbox')\`: Use to choose type of the component.
  - \`checkbox\`
  - \`radio\`: You should add \`clicked\` to \`props\` in order that the value of the component will be only one value.
  - \`switch\`: You can add \`buttonStyle\` to \`props\` when you want to modify style of button. This is the same as \`style\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
