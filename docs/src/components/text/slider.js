'use strict';

export default `
  # [Slider](./#Slider)
  Use to make a slider.

  #### Props
  - \`onChange\`: Use to get \`value\`.
  - \`value\`: This is the value of this component.
  - \`max(default: 100)\`: This is the max of \`value\`.
  - \`min(default: 0)\`: This is the min of \`value\`.
  - \`buttonStyle\`: Use to modify the style of the button. This is a function and the parameter is a number which is the percentage of \`value\`. You need to return a object of the style. If you modify the size of the button, this percentage is important to help you modify \`left\` like \`percentage => ({left: 'calc(' + percentage * 100 + '% - 10px)'})\`.
  - \`barStyle\`: Use to modify the style of the bar. This is a function and the parameter is a number which is the percentage of \`value\`. You need to return a object of the style. If you modify the size of the bar, this percentage is important to help you modify \`left\` like \`percentage => ({left: 'calc(' + percentage * 100 + '% - 10px)'})\`.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import Slider from 'cat-components/lib/Slider';

  export default class Example extends React.Component {
    render() {
      return (
        <Slider />
      );
    }
  }
  \`\`\`
`;
