'use strict';

const expect = require('chai').expect;
const Buffer = require('buffer').Buffer;
const fs = require('fs');
const reader = require('../lib/fs-readfile.js');

let filePaths = [
  `${__dirname}/../data/first.txt`,
  `${__dirname}/../data/second.txt`,
  `${__dirname}/../data/third.txt`,
];

console.log(filePaths);

describe('fs-readfile.js', function() {
  describe('#readFile', function() {
    let hexBuffers = reader(filePaths);
    it('should read first.txt and return a hex string', function(done) {
      console.log('8 bytes of first.txt as a hex string', hexBuffers[0]);
      expect(typeof hexBuffers[0]).equal(typeof 'string');
      done();
    });
    it('should read second.txt and return a hex string', function(done) {
      console.log('8 bytes of second.txt as a hex string', hexBuffers[1]);
      expect(typeof hexBuffers[1]).equal(typeof 'string');
      done();
    });
    it('should read third.txt and return a hex string', function(done) {
      console.log('8 bytes of third.txt as a hex string', hexBuffers[2]);
      expect(typeof hexBuffers[2]).equal(typeof 'string');
      done();
    });
  });
});
