'use strict';

export default example => `
# [VideoSubtitle](./#VideoSubtitle)

#### Other packages
- [moment](http://momentjs.com/)

#### Props
- \`subtitle\` [object, required]

  This is the subtitle of the video.

  - \`hour\` [number]
  - \`minute\` [number]
  - \`second\` [number]
  - \`millisecond\` [number]
  - \`content(now)\` [func, required]

    This function should return a react component.

    - \`now\` [boolean]

      If this content should be shown, this will be \`true\`.

- \`now\` [object, required]

  - \`hour\` [number]
  - \`minute\` [number]
  - \`second\` [number]

#### Example
\`\`\`js
${example}
\`\`\`
`;
