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

#### Decorators
- sidebarBuilder
  - Props
    - \`sidebar(component)\`

      This is the function to build \`sidebar\`.

      - \`component\` [component, required]

    - \`hideSidebar()\`

      This is the function to hide \`sidebar\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
