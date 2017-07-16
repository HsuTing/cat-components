'use strict';

const output = (
  names = []
) => names.map(name => ({
  name,
  text: example => `
# [${name}](./#${name})

\`\`\`js
${example}
\`\`\`
  `,
  component: require(`./../../../../lib/multiple/Use${name}`).default
}));

export const input = output([
  'InputDate',
  'InputSelect'
]);
