'use strict';

export default example => `
# [Sidebar](./#Sidebar)
This use \`ReactDOM.render\` to make an sidebar. As a result, you need to add a \`DOM\` whose \`id\` is \`sidebar\` like \`<div id='sidebar' />\` in \`html\`. You can also use \`id\` to set a new id for sidebar.

You need to add \`Sidebar\` before you use \`sidebarBuilder\`.

#### Props
- \`id\` [string]

  Use to set \`id\` for rendering \`sidebar\`.

- \`menu\` [component, required]

  This is uesd to build the menu of the \`sidebar\`.

- \`rootStyle\` [object]

  Use to modify the style of the root component.

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
