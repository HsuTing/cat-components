'use strict';

export default `
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
  'use strict';

  import React from 'react';
  import Sidebar, {sidebarBuilder} from 'cat-components/lib/Sidebar';

  @sidebarBuilder
  export default class Example extends React.Component {
    static propTypes = {
      sidebar: PropTypes.func.isRequired
    }

    render() {
      return (
        <button onClick={this.props.sidebar}
        >Sidebar</button>
      );
    }
  }

  const menu = (
    <div>
      <h4>Item1</h4>
      <h4>Item2</h4>
      <h4>Item3</h4>
    </div>
  );

  export default () => (
    <Sidebar menu={meun}>
      <Example />
    <Sidebar>
  );
  \`\`\`
`;
