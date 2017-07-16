'use strict';

export default example => `
# [Calendar](./#Calendar)
Because this component uses \`moment\`, the month which you give and you get is equal to the real month minus one.

#### Other packages
- [moment](http://momentjs.com/)

#### Props
- \`start\` [int, default: 1999]

  This is the start of the year.

- \`end\` [int, default: 2030]

  This is the end of the year.

- \`format\` [string, default: 'MMM D YYYY']

  You can use this to modify the format of the text. See [here](http://momentjs.com/docs/#/displaying/format/) to learn more information.

- \`isChosenStyle\` [object]

  Use to modify style when date is chosen.

- \`getDate(date)\` [func]

  Use to get date.

  - \`date\` [object]

    This is the date which is choosen, like \`{year: 1990, month: 1, date: 1}\`.

- \`defaultDate\` [object]

  Give a default date to \`Calendar\`. For example, it can be \`{year: 2017}\`.

- \`date\` [object]

  Give a date when you want to change the date which is chosen. For example, it can be \`{year: 2017}\`.

#### Example
\`\`\`js
${example}
\`\`\`
`;
