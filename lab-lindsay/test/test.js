
// const expect = require('chai').expect;
// const Buffer = require('buffer').Buffer;
// const fs = require('fs');
//
'use strict';

const assert = require('assert');
const app = require('../index.js');

describe('index.js', function() {
  describe('firstBuffer', function() {
    it('the zero index of hexArray should equate to hex data from the one.txt file', function() {
      assert.equal(app.hexArray[0], '4c6f72656d206970');
    });
  });
});
