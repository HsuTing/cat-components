'use strict';

export default example => `
# [Alert](./#Alert)
You need to add \`Alert\` before you use \`alertBuilder\`.

#### Props
- \`iconStyle\` [object]

  Use to set style of \`close icon\`.

- \`animationStyles\` [array]

  Use to modify the animation of showing or hiding the \`alert\`. It must be an array like \`[hideStyle, ..., showStyle]\`. You can use many styles in this array.

#### Decorators
- alertBuilder
  - Props
    - \`alert(component)\` [func]

      This is the function to build \`alert\`.

      - \`component({hide})\` [func, required]

        This is uesd to build the children of the \`alert\`.

        - \`hide()\` [func]

          You can give this function to your \`component\` as \`props\` and use this to hide the \`component\`.

    - \`hideAlert()\` [func]

      This is the function to hide \`alert\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
