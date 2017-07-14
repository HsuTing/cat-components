'use strict';

export default `
  # [I18n](./#I18n)
  This is used to build several languages in website.

  #### Other packages
  - [whatwg-fetch](https://github.com/github/fetch)

  #### Props
  - \`lang(required)\`: This is the default language which will be used at first.
  - \`defaultData(required)\`: The data of the language is used at first.
  - \`dirPath(default: '/public/i18n')\`: This is the path of the file folder which has the files, like \`en-us.json\`, \`zh-tw.json\`.

  #### Decorators
  - language
    - Props
      - \`translate\`: This is the object data of the language from your json file.
      - \`changeLanguage\`: This is a function which can be used to change the language. The argument of the function is your new language. Use like \`onClick={changeLanguage('en-us')}\`.

  #### Example
  \`\`\`js
  //en-us.json
  {
    hello: "Hello world"
  }

  //component.js
  'use strict';

  import React from 'react';
  import PropTypes from 'prop-types';
  import I18n, {language} from 'cat-components/lib/I18n';

  @language
  class Example extends React.Component {
    static propTypes = {
      translate: PropTypes.object.isRequired
    }

    render() {
      const {translate} = this.props;

      return (
        <div>{translate.hello}</div>
      );
    }
  }

  export default () => (
    <I18n lang='en-us'
      defaultData={defaultData}
    >
      <Example />
    </I18n>
  );
  \`\`\`
`;
