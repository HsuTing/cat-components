'use strict';

export default `
  # [checkFBAPI](./#checkFBAPI)
  Use to check if \`FB\` can be use.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import PropTypes from 'prop-types';
  import checkFBAPI from 'cat-components/lib/checkFBAPI';

  @ccheckFBAPI
  export default class Example extends React.Component {
    static propTypes = {
      FBAPICanUse: PropTypes.bool.isRequired
    }

    render() {
      return (
        <div>
          {this.props.FBAPICanUse ? 'Can use "FB.api".' : 'Can not use "FB.api".'}
        </div>
      );
    }
  }
  \`\`\`
`;
