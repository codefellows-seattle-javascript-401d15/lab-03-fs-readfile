'use strict';

const expect = require('chai').expect;
const Buffer = require('buffer').Buffer;
const fs = require('fs');

describe('fs module', function() {
  describe('readFile', function() {
    it('should read a file and produce a raw buffer', done => {
      fs.readFile(`${__dirname}/../data/one.txt`, function(err, data) {
        let bufferData = data;
        expect(typeof bufferData).equal(typeof Buffer.from(''));
        done();
      })
    })
  })
})
