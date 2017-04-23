'use strict';

const expect = require('chai').expect;
const Buffer = require('buffer').Buffer;
const fs = require('fs');
const fileReader = require('../fs-textData.js');
let mockArray = [ '646f677320617265', '6361747320617265', '6269726473206172' ];

describe('fs-textData.js', function() {
  describe('#readFile', function() {
    it('should be an object', done => {
      fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
        let bufferData = data;
        expect(typeof bufferData).to.be.equal(typeof Buffer.from(''));
        done();
      });
    });
  });
});

describe('fs-textData.js', function() {
  describe('#readFile', function() {
    it('should be an object', done => {
      fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
        let bufferData = data;
        expect(typeof bufferData).to.be.equal(typeof Buffer.from(''));
        done();
      });
    });
  });
});

describe('fs-textData.js', function() {
  describe('#readFile', function() {
    it('should be an object', done => {
      fs.readFile(`${__dirname}/../data/three.txt`, function(err, data) {
        let bufferData = data;
        expect(typeof bufferData).to.be.equal(typeof Buffer.from(''));
        done();
      });
    });
  });
});

describe.only('fs-textData.js', function() {
  describe('#callback', function() {
    it('should return an array', done => {
      fileReader(function(fileArray){
        expect(fileArray).to.deep.equal(mockArray);
        expect(fileArray[0]).to.equal(mockArray[0]);
        done();
      });
    });
  });
});
