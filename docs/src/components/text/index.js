'use strict';

/* eslint-disable no-useless-escape */
export default `
# How to use
#### Install package
\`\`\`sh
yarn add react react-dom cat-components
//or
npm install react react-dom cat-components
\`\`\`

#### Install other packages
Some components need other packages. You should install those packages by yourself.

#### Use it
Then you can use those components with \`import [component name] from 'cat-components/lib/[component name]';\`. You can see [code](https://github.com/HsuTing/cat-components/tree/master/docs/src/components) to learn how to use those components.

Most components can be used like normal component. As a result, you can use like \`style\`, \`onClick\` and so on. However, remember to add [radium-normalize](https://www.npmjs.com/package/radium-normalize) or include [normalize.css](https://necolas.github.io/normalize.css/) to your project.

#### Utils
Here are some functions you can use. Use them with \`import [util name] from 'cat-components/lib/utils/[util name]';\`.

- \`toggleStyle(status, styles)\` [func]

  This will give a style with \`radium.keyframes\`. If the \`status\` is \`true\`, it will make an animtion from the first style to ths least style.

  - \`status\` [bool, default: true]

    Use to determine give a showing style or hiding style.

  - \`styles\` [array, default: []]

    The styles in this array must be \`[hideStyle, ..., showStyle]\`. This array must have at least two elements.

- \`loadAnimation(styles)\` [func]

  This will return an array of \`<StyleRoot />\`. Owing to some problem with \`radium.keyframes\`, you can use this to load some keyframes which you add after the components are mounted.

  - \`styles\` [array, default: []]

    Add style to this array.

#### Multiple components
Because those components are build with \`radium\`, this is difficult that users can control all the styles if the component is complex. As a result, those components are as simpler as possible. However, I have write some examples to show how to use those components to make some complex components.

`;
