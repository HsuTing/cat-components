'use strict';

export default `
  # [color](./#color)
  This is the style of the color from [material design](https://material.io/guidelines/style/color.html#color-color-palette).

  #### Example
  \`\`\`js
  import red from 'components/lib/color/red';

  console.log(red); // #F44336
  // or
  import * as red from 'components/lib/color/red';

  console.log(red);
  /*
   * {
   *   "_50_": "#FFEBEE",
   *   "_100_": "#FFCDD2",
   *   "_200_": "#EF9A9A",
   *   "_300_": "#E57373",
   *   "_400_": "#EF5350",
   *   "_500_": "#F44336",
   *   "_600_": "#E53935",
   *   "_700_": "#D32F2F",
   *   "_800_": "#C62828",
   *   "_900_": "#B71C1C",
   *   "default": "#F44336"
   * }
   * /
  \`\`\`
`;
