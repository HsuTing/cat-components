'use strict';

export default example => `
# [Toggle](./#Toggle)

#### Other packages
- [react-icons](https://gorangajic.github.io/react-icons/fa.html)

#### Props
- \`rootStyle(isClicked)\` [func]

  Use to modify the style of the \`toggle\`. You need to return an object to modify the style.

  - \`isClicked\` [bool]

    This will be \`true\` when the \`toggle\` is clicked.

- \`checked\` [bool]

  Use to set default clicked.

- \`icons\` [object]

  You can use this to change icons. For example, it will be \`{default: IconOne, clicked: IconTwo}\`.

- \`type\` [string, default: 'checkbox']

  Use to choose the type of the component. It can be \`checkbox\`, \`radio\` and \`switch\`.

  - \`radio\`
    - Props
      - \`clicked\` [bool, required]

  - \`switch\`
    - Props
      - \`buttonStyle\` [object]

        Use to modify the style of the button.

#### Example
\`\`\`js
${example}
\`\`\`
`;
