'use strict';

const expect = require('chai').expect;
const buffer = require('buffer').buffer;
const fs = require('fs');

describe('fs module', function(){
  describe('#readFile', function(){
    it('should read a file and produce a raw buffer', done => {
      fs.readFile(`${__dirname}/../data/text.txt`, function(err, data){
        let bufferData = data;
        expect(typeof bufferData).to.equal(typeof Buffer.from(''));
        done();
      });
    });
    it('should read a file and produce a raw buffer', done => {
      fs.readFile(`${__dirname}/../data/new-lyric.txt`, function(err, data){
        let newBufferData = data;
        expect(typeof newBufferData).to.equal(typeof Buffer.from(''));
        done();
      });
    });
    it('should read a file and produce a raw buffer', done => {
      fs.readFile(`${__dirname}/../data/newest-lyric.txt`, function(err, data){
        let newBufferData = data;
        expect(typeof newBufferData).to.equal(typeof Buffer.from(''));
        done();
      });
    });
  });
});
