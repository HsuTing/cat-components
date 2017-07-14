'use strict';

export default `
  # [Loading](./#Loading)
  Use to make a loading.

  #### Other packages
  - [eases](https://www.npmjs.com/package/eases)
  - [d3](https://github.com/d3/d3)

  #### Props
  - \`innerRadius(default: 10)\`: This is the radius of the inner circle.
  - \`outerRadius(default: 13)\`: This is the radius of the outer circle.
  - \`sec(default 0.5)\`: This is duration of animation.
  - \`fps(default: 60)\`: This is fps of animation.
  - \`diff(default: 0.8)\`: This is the max value between the start angle and the end angle.
  - \`animation(default: 'quartInOut')\`: This is function of animation. It can be a name of [eases](https://www.npmjs.com/package/eases) or a function.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import Loading from 'cat-components/lib/Loading';

  export default class Example extends React.Component {
    render() {
      return (
        <Loading />
      );
    }
  }
  \`\`\`
`;