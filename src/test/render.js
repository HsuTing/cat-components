'use strict';

import path from 'path';
import should from 'should'; // eslint-disable-line no-unused-vars
import memFs from 'mem-fs';
import editor from 'mem-fs-editor';

const store = memFs.create();
const fs = editor.create(store);
const root = path.resolve(__dirname, './../../test-build');

const renderContent = content => (
  `<main id="root">${content}</main>\n`
);

describe('render', () => {
  it('# test react', () => {
    fs.read(
      path.resolve(root, './test-react/index.html')
    ).should.equal(
      renderContent('<div>test react</div>')
    );
  });

  describe('# test redux', () => {
    it('## just reducer', () => {
      fs.read(
        path.resolve(root, './test-redux/index.html')
      ).should.equal(
        renderContent('<div>test redux(origin state)</div>')
      );
    });

    it('## add preloadedState', () => {
      fs.read(
        path.resolve(root, './test-redux/preloadedState/index.html')
      ).should.equal(
        renderContent('<div>test redux(preloaded state)</div>')
      );
    });
  });

  describe('# test router', () => {
    it('## render \'/\'', () => {
      fs.read(
        path.resolve(root, './test-router/index.html')
      ).should.equal(
        renderContent('<div data-radium="true"><div>router render index</div></div>')
      );
    });

    it('## render \'/about/\'', () => {
      fs.read(
        path.resolve(root, './test-router/about/index.html')
      ).should.equal(
        renderContent('<div data-radium="true"><div>router render about</div></div>')
      );
    });
  });
});
