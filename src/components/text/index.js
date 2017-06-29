'use strict';

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
  Then you can use those components with \`import [component name] from \'cat-components/lib/[component name]\';\`. You can see [code](https://github.com/HsuTing/cat-components/tree/master/src/components) to learn how to use those components.

  Most components can be used like normal component. As a result, you can use like \`style\`, \`onClick\` and so on. However, remember to add [radium-normalize](https://www.npmjs.com/package/radium-normalize) or include [normalize.css](https://necolas.github.io/normalize.css/) to your project.

  ##### Other components
  - \`Link\`: This is a component of \`Link\` in \`react-router-dom\` with \`radium\`.
  - \`Wrapper\`: This is a component for using server side rendering with \`radium\`. It can alos render \`react-redux\` and \`react-router-dom\`.
    - Props
      - \`redux\`: This is an object. You can give \`reducer(required)\`, \`preloadedState\` and \`enhancer\`. This is used like \`createStore\` in \`redux\`.
      - \`router\`: This is an object. You can give \`isServer\` to choose \`StaticRouter\` or \`BrowserRouter\`. When \`isServer\` is \`true\`. you need to give an object like \`{location: '/', context: {}}\`.
`;
