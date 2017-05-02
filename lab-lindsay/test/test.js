
'use strict';

const Buffer = require('buffer').Buffer;
const app = require('../index.js');
const expect = require('chai').expect;

let bufferArray = [];

bufferArray = app(`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`);

describe('index.js', function() {
  describe('hexArray', function() {
    it('the zero index of hexArray should equate to hex data from the one.txt file', function() {
      expect(bufferArray[0]).equal('4c6f72656d206970');
    });
    it('the first index of hexArray should equate to hex data from the two.txt file', function() {
      expect(bufferArray[1]).equal('41207374616e6461');
    });
    it('the second index of hexArray should equate to hex data from the three.txt file', function() {
      expect(bufferArray[2]).equal('4974206861732061');
    });
  });
});
