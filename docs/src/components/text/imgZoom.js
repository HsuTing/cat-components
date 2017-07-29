'use strict';

export default example => `
# [ImgZoom](./#ImgZoom)

#### Props
- \`rootStyle(isZoom)\` [func]

  Use to modify the root style of the background.

  - \`isZoom\` [bool]

    This will be \`true\` when the img is zoomed in.

- \`imgBackgroundStyle\` [object]

  Use to modify the style of the img\\\`s background. Here is a transparent \`div\` which control the size of the img.

- \`imgStyle\` [object]

  Use to modify the style of the img.

#### Decorators
- addZoom
  - Props
    - \`zoomIn(src, e)\` [func]

      Show the image.

      - \`src\` [string, required]

        Give the link of the img.

      - \`e\` [object, required]

        Give the event to the img. You can see the example.

    - \`zoomOut()\` [func]

      Hide the image.

#### Example
\`\`\`js
${example}
\`\`\`
`;
