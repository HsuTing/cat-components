'use strict';

export default example => `
# [timer](./#timer)

#### Other packages
- [moment](http://momentjs.com/)

#### Arguments
- \`fps\` [int, default: 120]

  Use to set the \`fps\` of the timer.

#### Props
- \`isRunning\` [bool]

  Show if the timer is running.

- \`timer\` [object]

  This is the data of the timer.

  - \`hours\` [int]
  - \`minutes\` [int]
  - \`seconds\` [int]

- \`timerStart(timer)\` [func]

  Run the timer.

  - \`time\` [moment, default: moment()]

    This is the start of the timer.

- \`timerStop()\` [func]

  Stop the timer.

- \`timerReset()\` [func]

  Reset the timer.

#### Example
\`\`\`js
${example}
\`\`\`
`;
