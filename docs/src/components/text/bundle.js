'use strict';

export default `
# [Bundle](./#Bundle)
Make a component with [bundle loader](https://github.com/webpack-contrib/bundle-loader). This aslo can use server side rendering. You must set a variable like \`TYPE\` to make the different between \`client\` and \`server\` side.

#### Example
\`\`\`js
import Bundle, {load} from 'cat-components/lib/bundle';

<Bundle load={
  process.env.NODE_ENV === 'production' && process.env.TYPE === 'client' ?
    require('bundle-loader?lazy&name=simple!./Component') :
    load(require('./Component'))
}
>
  {Component => <Component />}
</Bundle>
\`\`\`
`;
