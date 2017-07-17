'use strict';

/* eslint-disable no-useless-escape */
export default `
# How to use
#### Install package
\`\`\`sh
yarn add cat-components
//or
npm install cat-components
\`\`\`

#### Install other packages
Some components need other packages. You should install those packages by yourself.

#### Use it
Then you can use those components with \`import [component name] from 'cat-components/lib/[component name]';\`. You can see [code](https://github.com/HsuTing/cat-components/tree/master/docs/src/components) to learn how to use those components.

Most components can be used like normal component. As a result, you can use like \`style\`, \`onClick\` and so on. However, remember to add [radium-normalize](https://www.npmjs.com/package/radium-normalize) or include [normalize.css](https://necolas.github.io/normalize.css/) to your project.

#### Multiple components
Because those components are build with \`radium\`, this is difficult that users can control all the styles if the component is complex. As a result, those components are as simpler as possible. However, I have write some examples to show how to use those components to make some complex components.
`;
