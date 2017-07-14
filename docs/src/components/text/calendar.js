'use strict';

export default `
  # [Calendar](./#Calendar)
  Use to make a calender.

  #### Other packages
  - [moment](http://momentjs.com/)

  #### Props
  - \`start(default: 1990)\`: This is the start of the year.
  - \`end(default: 2030)\`: This is the end of the year.
  - \`format(default: 'MMM D YYYY')\`: You can use this to modify the format of the text. See [here](http://momentjs.com/docs/#/displaying/format/) to learn more information.
  - \`isChosenStyle\`: Use to modify style when date is chosen.
  - \`getDate\`: Use to get date.
  - \`defaultDate\`: Give a default date to \`Calendar\`. This is an object like \`{year: 2017}\`.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import Calendar from 'cat-components/lib/Calendar';

  export default class Example extends React.Component {
    render() {
      return (
        <Calendar />
      );
    }
  }
  \`\`\`
`;
