'use strict';

export default example => `
# [Loading](./#Loading)

#### Other packages
- [eases](https://www.npmjs.com/package/eases)
- [d3](https://github.com/d3/d3)

#### Props
- \`innerRadius\` [int, default: 10]

  This is the radius of the inner circle.

- \`outerRadius\` [int, default: 13]

  This is the radius of the outer circle.

- \`sec\` [int, default 0.5]

  This is the duration of the animation.

- \`fps\` [int, default: 60]

  This is the fps of the animation.

- \`diff\` [int, default: 0.8]

  This is the max value between the start angle and the end angle.

- \`animation\` [string | func, default: 'quartInOut']

  This is the function of the animation. It can be a name of [eases](https://www.npmjs.com/package/eases) or a function.

#### Example
\`\`\`js
${example}
\`\`\`
`;
