'use strict';

export default example => `
# [I18n](./#I18n)
This uses to build several languages in website with \`fetch\`. This will try to get new json file when you change language.

#### Other packages
- [fetch-everywhere](https://github.com/lucasfeliciano/fetch-everywhere)

#### Props
- \`lang\` [string, required]

  This is the default language which will be used at first.

- \`defaultData\` [object, required]

  The data of the language is used at first. For example, it can be \`{hello: "Hello world"}\`.

- \`basename\` [string, default: '/public/i18n/']

  This is the basename of the url which has those files, like \`en-us.json\`, \`zh-tw.json\`.

#### Decorators
- language
  - Props
    - \`translate\` [object]

      This is the object of the language data from your json file.

    - \`changeLanguage(lang)\` [func]

      This is a function which can be used to change the language. Use like \`onClick={changeLanguage('en-us')}\`.

      - \`lang\` [string, required]

#### Example
\`\`\`js
// en-us.json
{
  hello: "Hello world"
}

// component
${example}

// root comopnent
export default () => (
  <I18n lang='en-us'
    defaultData={defaultData}
  >
    <UseI18n />
  </I18n>
);
\`\`\`
`;
