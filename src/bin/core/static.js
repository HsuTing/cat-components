'use strict';

import path from 'path';
import process from 'process';
import nunjucks from 'nunjucks';
import {minify} from 'html-minifier';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

const root = process.cwd();
const ENV = process.env.NODE_ENV === 'production';

const render = (component, options, props) => {
  nunjucks.configure(path.resolve(root, options.root || './views'));
  options.content = renderToStaticMarkup(
    React.createElement(component, props)
  );

  const filename = (options.name === 'index' ? '' : options.name + '/') + 'index.html';
  const output = nunjucks.render(
    options.template ? options.template : 'template.html', {
      ...options,
      ENV
    }
  );

  return {
    filename,
    content: minify(output, ENV ? /* istanbul ignore next */ {
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyURLs: true,
      minifyJS: true
    }: {})
  };
};

export default config => {
  return config.map(({props, ...options}) => {
    const componentPath = path.resolve(root, options.component);
    options.component = require(componentPath).default || /* istanbul ignore next */ require(componentPath);

    return render(
      options.component,
      options,
      props || {}
    );
  });
};
