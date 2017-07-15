'use strict';

export default example => `
# [Menu](./#Menu)
Use to make a menu.

#### Props
- \`children\` [component, required]
- \`menu(hide)\` [func, required]

  You need to return a component as a \`menu\`.

  - \`hide()\` [func]

    You can give this function to your \`menu\` as \`props\` and use this to hide the \`menu\`.

- \`menuStyle(isShown)\` [func]

  Use to modify the style of the root component. You need to return an object of the style.

  - \`isShown\` [bool]

    This will be \`true\` when \`menu\` is shown.

- \`delay\` [int, default: 1]

  This is the delay time of hiding \`menu\`.

- \`trigger\` [array, default: ['click', 'hover']]

  Determine that will trigger the animation of \`show\` and \`hide\`. \`trigger\` must be one of \`click\` or \`hover\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
