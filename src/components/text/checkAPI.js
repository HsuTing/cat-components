'use strict';

export default `
  # [checkAPI](./#checkAPI)
  Use to check if some api library can be used like \`FB\`, \`gapi\`.

  #### checkAPI(name, func, [getData, defaultData])
  - \`name\`: Use to identify api. You will get a bool as \`props\` with [name + CanUse] and you can use this to check if this library can be used.
  - \`func\`: This must be a function which will return global variable.
  - \`getData(callback)\`: This will be called when this library can be used. This is also a function and you can use \`callback\` to add some data with library.
    \`\`\`js
    @checkAPI('FB', () => FB,
      callback => {
        FB.login(response => {
          callback(response);
        });
      }
    )
    class ...
    \`\`\`
  - \`defaultData\`: This will be added to \`props\`.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import PropTypes from 'prop-types';
  import checkAPI from 'cat-components/lib/checkAPI';

  @checkAPI('FB', () => FB)
  export default class Example extends React.Component {
    static propTypes = {
      FBCanUse: PropTypes.bool.isRequired
    }

    render() {
      return (
        <div>
          {this.props.FBCanUse ? 'Can use "FB.api".' : 'Can not use "FB.api".'}
        </div>
      );
    }
  }
  \`\`\`
`;
