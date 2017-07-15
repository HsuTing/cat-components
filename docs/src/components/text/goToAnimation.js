'use strict';

export default example => `
# [goToAnimation](./#goToAnimation)
Use to scroll main \`DOM\` to target \`DOM\` or top of window.

#### Other packages
- [eases](https://www.npmjs.com/package/eases)

#### Arguments
- \`main\` [string, required]

  This is main \`DOM\` which is controlled. This is used to \`querySelector\` to find the \`DOM\`. As a result, you can use like \`#main\`.

- \`options\` [object, default = {sec: 2, fps: 60, animation: 'quartInOut'}]

  You can add \`sec\`, \`fps\` and \`animation\`. \`sec\` is the duration of this animation. \`fps\` is the fps of this animation. \`animation\` can be a name of [eases](https://www.npmjs.com/package/eases) or a function.

#### Props
- \`goTo(target)\` [func]

  This is the function to srcoll the main \`DOM\`.

  - \`target\` [string, required]

    This is alse used to \`querySelector\` to find the target \`DOM\`. If \`target\` is not set, this function will scroll to the top of the main \`DOM\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
