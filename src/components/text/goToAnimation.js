'use strict';

export default `
  # [goToAnimation](./#goToAnimation)
  Use to scroll main \`DOM\` to target \`DOM\` or top of window.

  #### Other packages
  - [eases](https://www.npmjs.com/package/eases)

  #### Arguments
  - \`main(required)\`: This is main \`DOM\` which is controlled.
  - \`options(default = {})\`
    - \`sec(default: 2)\`: This is the duration of this animation.
    - \`fps(default: 60)\`: This is the fps of this animation.
    - \`animation(default: 'quartInOut')\`: This is function of animation. It can be a name of [eases](https://www.npmjs.com/package/eases) or a function.

  #### Props
  - \`goTo\`: This is the function to srcoll the main \`DOM\`. The argument of this function is \`target\`, and this is used to find the target \`DOM\`. If \`target\` is not set, this function will scroll to top of main \`DOM\`.

  \`main\` and \`target\` must be a string. This component uses those string with \`document.querySelector\` to get \`DOM\`.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import PropTypes from 'prop-types';
  import goToAnimation from 'cat-components/lib/goToAnimation';

  @goToAnimation('body')
  export default class Example extends React.Component {
    static propTypes = {
      goTo: PropTypes.func.isRequired
    }

    render() {
      return (
        <button onClick={() => this.props.goTo()}>Go To</button>
      );
    }
  }
  \`\`\`
`;
