'use strict';

import fs from 'fs';
import path from 'path';

export default (
  wrapper,
  nowPath
) => fs.readdirSync(path.resolve(__dirname, nowPath))
  .forEach(filePath => {
    if((/.swp/g).test(filePath))
      return;

    require(
      path.resolve(__dirname, nowPath, filePath)
    ).default(wrapper);
  });
