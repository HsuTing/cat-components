'use strict';

export default example => `
# [PictureSlideshow](./#PictureSlideshow)
Use to make a picture slideshow.

#### Other packages
- [uuid](https://www.npmjs.com/package/uuid)

#### Props
- \`index\` [int, required]

  This is the index of slideshow. Use this to control which \`image\` should be shown.

- \`imgs\` [array, required]

  This is an array of \`image\`. It should have \`src\` to give a link of the \`image\` and other attributes will be given to \`image\` as \`props\`.

- \`type\` [string, default: 'div']

  Choose the type of \`image\`. If \`type\` is \`img\`, this component will use \`img\` tag as \`image\`. If it is not, this component will use \`div\` tag as \`image\`.

- \`showStyle\` [object]
- \`hideStyle\` [object]

  Those are the animations of showing and hiding \`image\`. Both of them need to have \`left\` and \`right\` to make the different animations when \`image\` moves to \`left\` and \`right\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
