'use strict';

export default `
  # [checkGAPI](./#checkGAPI)
  Use to check if \`FB\` can be use.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import PropTypes from 'prop-types';
  import checkGAPI from 'cat-components/lib/checkGAPI';

  @ccheckGAPI
  export default class Example extends React.Component {
    static propTypes = {
      GAPICanUse: PropTypes.bool.isRequired
    }

    render() {
      return (
        <div>
          {this.props.GAPICanUse ? 'Can use "FB.api".' : 'Can not use "FB.api".'}
        </div>
      );
    }
  }
  \`\`\`
`;
