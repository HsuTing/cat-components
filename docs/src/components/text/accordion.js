'use strict';

/* eslint-disable no-useless-escape */
export default `
  # [Accordion](./#Accordion)
  Use to make an accordion.

  #### Props
  - \`children(required)\`: This children should be an array of \`StyleRoot\` in \`radium\`, and \`StyleRoot\` can only have two childrens which are shown as \`title\` and \`content\`.
  - \`index(required)\`: This is the index of \`accordion\`. Use to choose whose item should be shown.
  - \`contentStyle\`: Use to modify style when the component is clicked. It is a function and the parameter is a boolean to show if the component is clicked. Then, you need to return a object to modify style.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import {StyleRoot} from 'radium';
  import Accordion from 'cat-components/lib/Accordion';

  export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0
      };

      this.onClick = this.onClick.bind(this);
    }

    render() {
      const {index} = this.state;

      return (
        <Accordion index={index}>
          {['1', '2', '3'].map((name, nameIndex) => {
            return (
              <StyleRoot key={nameIndex}
                onClick={this.onClick(nameIndex)}
              >
                <h5>{\`title\$\{name\}\`}</h5>
                <p>{\`content\$\{name\}\`}</p>
              </StyleRoot>
            );
          })}
        </Accordion>
      );
    }

    onClick(index) {
      return () => {
        this.setState({index});
      };
    }
  }
  \`\`\`
`;
