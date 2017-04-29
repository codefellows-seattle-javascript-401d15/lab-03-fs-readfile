'use strict';

const expect = require('chai').expect;
const reader = require('../lib/fs-readfile.js');

let filePaths = [
  `${__dirname}/../data/first.txt`,
  `${__dirname}/../data/second.txt`,
  `${__dirname}/../data/third.txt`,
];

let hexBuffers = reader(filePaths);
describe('fs-readfile.js', function() {
  describe('#readFile(\'first.txt\')', function() {
    it('should read first.txt and return a hex string', function(done) {
      console.log('8 bytes of first.txt as a hex string', hexBuffers[0]);
      expect(typeof hexBuffers[0]).equal(typeof 'string');
      done();
    });
  });
  describe('#readFile(\'second.txt\')', function() {
    it('should read second.txt and return a hex string', function(done) {
      console.log('8 bytes of second.txt as a hex string', hexBuffers[1]);
      expect(typeof hexBuffers[1]).equal(typeof 'string');
      done();
    });
  });
  describe('#readFile(\'third.txt\')', function() {
    it('should read third.txt and return a hex string', function(done) {
      console.log('8 bytes of third.txt as a hex string', hexBuffers[2]);
      expect(typeof hexBuffers[2]).equal(typeof 'string');
      done();
    });
  });
});
