'use strict';

const path = require('path');
const should = require('should');
const memFs = require('mem-fs');
const editor = require('mem-fs-editor');

const store = memFs.create();
const fs = editor.create(store);

const renderContent = content => (
  `<main id="root"><div>${content}</div></main>\n`
);

describe('render', () => {
  it('# test react"', () => {
    fs.read(
      path.resolve(__dirname, './test-react/index.html')
    ).should.equal(
      renderContent('<div>test react</div>')
    );
  });

  describe('# test redux"', () => {
    it('## just reducer', () => {
      fs.read(
        path.resolve(__dirname, './test-redux/index.html')
      ).should.equal(
        renderContent('<div>test redux(origin state)</div>')
      );
    });

    it('## add preloadedState', () => {
      fs.read(
        path.resolve(__dirname, './test-redux/preloadedState/index.html')
      ).should.equal(
        renderContent('<div>test redux(preloaded state)</div>')
      );
    });
  });
});
