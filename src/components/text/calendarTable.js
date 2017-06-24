'use strict';

export default `
  # [CalendarTable](./#CalendarTable)
  Use to build a Calendar table.

  #### Other packages
  - [moment](http://momentjs.com/)

  #### Props
  - \`year(default: this year)\`: This is the year of the calendar.
  - \`month(required)\`: This is the month of the calendar.
  - \`date(default: today)\`: This is the date today.
  - \`children(required)\`: Use to render the calendar. This will be given \`year\`, \`month\`, \`date\`, \`isBefore\`, \`isAfter\` and \`sameMonth\` as \`props\`.
    - \`year\`, \`month\`, \`date\`: This is the date of this children.
    - \`isBefore\`, \`isAfter\`: This is \`boolean\` and use to show the date of this children is before or after today.
    - \`sameMonth\`: This is \`boolean\` and use to show if the month of this children is same as this month of the calendar.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import CalendarTable from 'cat-components/lib/CalendarTable';

  const Cell = ({date, style}) => (
    <div style={style}>{date}</div>
  );

  export default class Example extends React.Component {
    render() {
      return (
        <CalendarTable month={now.month()}>
          <Cell />
        </CalendarTable>
      );
    }
  }
  \`\`\`
`;
