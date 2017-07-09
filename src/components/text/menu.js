'use strict';

export default `
  # [Menu](./#Menu)
  Use to make a menu.

  #### Props
  - \`children(required)\`
  - \`menu(required)\`: This is a function which needs to return a component of \`menu\`. This parameter is an objcet of \`hide\`. \`hide\` can be used to hide the \`menu\`.
  - \`menuStyle\`: Use to modify style when the component is shown. It is a function and the parameter is a boolean to show if the component is shown. Then, you need to return a object to modify style.
  - \`delay(default: 1)\`: This is the delay time of hiding \`menu\`.
  - \`trigger(default: ['click', 'hover'])\`: Determine that will trigger the animation of \`show\` and \`hide\`. \`trigger\` must be one of \`click\` or \`hover\`.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import Menu from 'cat-components/lib/Menu';

  export default class Example extends React.Component {
    render() {
      return (
        <Menu menu={() => <h4>Menu</h4>}>
          <button>menu</button>
        </Menu>
      );
    }
  }
  \`\`\`
`;
