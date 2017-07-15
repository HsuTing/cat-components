'use strict';

export default example => `
# [Slider](./#Slider)

#### Props
- \`onChange(value)\` [func]

  Use to get \`value\`.

  - \`value\` [int]

- \`value\` [int]

  This is the value of this component.

- \`max\` [int, default: 100]

  This is the max of the value.

- \`min\` [int, default: 0]

  This is the min of the value.

- \`buttonStyle(percentage)\` [func]
- \`barStyle(percentage)\` [func]

  Use to modify the style of the button and use to modify the style of the bar. You need to return an object of the style to modify the style.

  - \`percentage\` [float]

    If you modify the size of the button, this percentage is important to help you modify \`left\`. For example, it will be \`percentage => ({left: 'calc(' + percentage * 100 + '% - 10px)'})\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
