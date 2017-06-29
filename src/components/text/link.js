'use strict';

export default `
  # [Link](./#Link)
  This is \`link\` in \`react-router-dom\` with \`radium\`.

  #### Other packages
  - [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import Link from 'cat-components/lib/Link';

  export default class Example extends React.Component {
    render() {
      return (
        <Link to='/' />
      );
    }
  }
  \`\`\`
`;
