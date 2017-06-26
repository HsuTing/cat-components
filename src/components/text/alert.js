'use strict';

export default `
  # [Alert](./#Alert)
  Use to make an alert, but this is not a component. This is a class which have three functions, and use \`ReactDOM.render\` to make an alert. As a result, you need to add a \`DOM\` whose \`id\` is \`alert\` like \`<div id='alert' />\` or use \`id\` to set a new id for alert.

  #### Props
  - \`id\`: Use to set \`id\` for rendering \`alert\`.
  - \`iconStyle\`: Use to set style of \`close icon\`.

  #### Decorators
  - alertBuilder
    - Props
      - \`alert\`: This is the function to build \`alert\`. The argument of this function is a react component.
      - \`hideAlert\`: This is the function to hide \`alert\`.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import Alert, {alertBuilder} from 'cat-components/lib/Alert';

  @alertBuilder
  export default class Example extends React.Component {
    static propTypes = {
      alert: PropTypes.func.isRequired
    }

    render() {
      return (
        <button onClick={() => this.props.alert(<div>Alert</div>)}
        >Alert</button>
      );
    }
  }

  export default () => (
    <Alert>
      <Example />
    <Alert>
  );
  \`\`\`
`;
