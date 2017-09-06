'use strict';

import fs from 'fs';
import path from 'path';

export default (
  wrapper,
  now_path
) => fs.readdirSync(path.resolve(__dirname, now_path))
  .forEach(file_path => {
    if((/.swp/g).test(file_path))
      return;

    require(
      path.resolve(__dirname, now_path, file_path)
    ).default(wrapper);
  });
