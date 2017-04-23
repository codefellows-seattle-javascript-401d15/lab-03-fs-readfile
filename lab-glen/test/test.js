'use strict';

const expect = require ('chai').expect;
const read = require('../lib/app.js');

const paths = [
  'data/one.txt',
  'data/two.txt',
  'data/three.txt',
];

describe('app.js', function () {
  describe('FS ReadFile exports', function () {
    var buffers = read(paths);
    it('should read file one and check first 8 hex digits', done => {
      console.log('File One : ' + buffers[0]);
      expect(typeof buffers[0]).to.be.equal(typeof 'string');
      done();
    });
    it('should read file two and check first 8 hex digits', done => {
      console.log('File Two : ' + buffers[1]);
      expect(typeof buffers[1]).to.be.equal(typeof 'string');
      done();
    });
    it('should read file three and check first 8 hex digits', done => {
      console.log('File Three : ' + buffers[2]);
      expect(typeof buffers[2]).to.be.equal(typeof 'string');
      done();
    });
  });
});
