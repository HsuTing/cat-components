'use strict';

export default example => `
# [PictureSlideshow](./#PictureSlideshow)
Use to make a picture slideshow.

#### Other packages
- [uuid](https://www.npmjs.com/package/uuid)

#### Props
- \`index(required)\`: This is the index of slideshow. Use this to control which \`image\` should be shown.
- \`imgs(required)\`: This is an array of \`image\`. It should have \`src\` to give a link of the \`image\` and other attributes will be given to \`image\` as \`props\`.
- \`type(default: 'div')\`: Choose the type of \`image\`. If \`type\` is \`img\`, this component will use \`img\` tag as \`image\`. If it is not, this component will use \`div\` tag as \`image\`.
- \`showStyle\`: This is the animation of showing \`image\`.
- \`hideStyle\`: This is the animation of hiding \`image\`.

\`hideStyle\` and \`showStyle\` are needed to have \`left\` and \`right\` to make an animation.

#### Example
\`\`\`js
${example}
\`\`\`
`;
