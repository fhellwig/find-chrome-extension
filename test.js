const assert = require('assert');
const findChromeExtension = require('./index');

const TEST_EXTENSION = 'React Developer Tools';

describe('find-chrome-extension', function() {
  it('should find the test extension', function() {
    const dir = findChromeExtension(TEST_EXTENSION);
    assert.strictEqual(typeof dir, 'string');
  });
});
