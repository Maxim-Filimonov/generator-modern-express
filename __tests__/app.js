'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-modern-express:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'));
  });

  it('creates files', () => {
    assert.file(['src/index.js', 'package.json', '.gitignore']);
  });
  it('install webpack', () => {
    assert.fileContent('package.json', 'webpack');
    assert.fileContent('package.json', 'webpack-cli');
  });
  it('installs jest and adds tasks', () => {
    assert.fileContent('package.json', 'jest');
    assert.fileContent('package.json', 'jest --watch');
  });
  it('adds jest configs', () => {
    assert.file(['src/jest.config.js', 'server/jest.config.js']);
  });
});
