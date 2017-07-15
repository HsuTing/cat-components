'use strict';

export default example => `
# [CalendarTable](./#CalendarTable)

#### Other packages
- [moment](http://momentjs.com/)

#### Props
- \`year\` [int, default: this year]

  This is the year of the calendar.

- \`month\` [int, required]

  This is the month of the calendar. If you want to set \`July\`, you need to set 6, not 7.

- \`date\` [int, today]

  This is the date today.

- \`children\` [component, required]

  Use to render the calendar. This will be given \`year\`, \`month\`, \`date\`, \`isBefore\`, \`isAfter\` and \`sameMonth\` as \`props\`.

  - \`year\`, \`month\`, \`date\` [int]

    This is the date of this children.

  - \`isBefore\`, \`isAfter\` [boolean]

    Use to show the date of this children is before or after today.

  - \`sameMonth\` [boolean]

    Use to show if the month of this children is same as this month of the calendar.

#### Example
\`\`\`js
${example}
\`\`\`
`;
