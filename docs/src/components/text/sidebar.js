'use strict';

export default example => `
# [Sidebar](./#Sidebar)
You need to add \`Sidebar\` before you use \`sidebarBuilder\`.

#### Props
- \`menu({hide})\` [func, required]

  This is uesd to build the menu of the \`sidebar\`.

  - \`hide()\` [func]

    You can give this function to your \`menu\` as \`props\` and use this to hide the \`menu\`.

- \`rootStyle\` [object]

  Use to modify the root style of the \`menu\`.

- \`backgroundStyle\` [object]

  Use to modify the style of the background component.

- \`animationStyles\` [array]

  Use to modify the animation of showing or hiding the \`sidebar\`. It must be an array like \`[hideStyle, ..., showStyle]\`. You can use many styles in this array.

#### Decorators
- sidebarBuilder
  - Props
    - \`sidebar()\`

      This is the function to build \`sidebar\`.

    - \`hideSidebar()\`

      This is the function to hide \`sidebar\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
