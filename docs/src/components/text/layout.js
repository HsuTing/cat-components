'use strict';

export default `
  # [layout](./#layout)
  This is the style of \`layout\`.

  - \`grid\`: If you need to add \`padding\` to \`grid\`, add \`top\`, \`right\` and so on to argument.
  - \`col\`: Give a number to set the column size for the cell, from 0 to 12. If you need to add \`padding\`, you can do the same thing like \`grid\` in the second argument.

  #### Example
  \`\`\`js
  import * as layout from 'cat-components/lib/style/layout';

  // No padding
  <div style={layout.grid()}>
    <div style={layout.col(1)} />
  </div>


  // Grid padding
  <div style={layout.grid({left: 20, right: 20})}>
    <div style={layout.col(1)} />
  </div>


  // Col padding
  <div style={layout.grid()}>
    <div style={layout.col(1, {left: 10, right: 10})} />
  </div>
  \`\`\`
`;
