'use strict';

export default `
  # [Square](./#Square)
  Make a square \`DOM\`. Remember that you do not set \`height\` of children \`DOM\`. If you set \`height\`, it will overwrite the \`height\` of \`Square\`.

  #### Other packages
  - [uuid](https://www.npmjs.com/package/uuid)
  - [cat-utils](https://github.com/HsuTing/cat-utils)

  #### Props
  - \`children(required)\`

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import Square from 'cat-components/lib/Square';

  const style = {
    width: '30%'
    background: 'blue'
  };

  export default class Example extends React.Component {
    render() {
      return (
        <Square>
          <div style={style} />
        </Square>
      );
    }
  }
  \`\`\`
`;