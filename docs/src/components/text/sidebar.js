'use strict';

export default example => `
# [Sidebar](./#Sidebar)
This use \`ReactDOM.render\` to make a sidebar. As a result, you need to add a \`DOM\` whose \`id\` is \`sidebar\` like \`<div id='sidebar' />\` or use \`id\` to set a new id for the sidebar.

#### Props
- \`id\`: Use to set \`id\` for rendering \`sidebar\`.
- \`menu\`: This is uesd to build the menu of the \`sidebar\`.
- \`rootStyle\`: This is the style of the root component.
- \`backgroundStyle\`: This is the style of the background component.

#### Decorators
- sidebarBuilder
  - Props
    - \`sidebar\`: This is the function to build \`sidebar\`.
    - \`hideSidebar\`: This is the function to hide \`sidebar\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
