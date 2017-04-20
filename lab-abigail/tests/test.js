'use strict';

const expect = require('chai').expect;
const Buffer = require('buffer').Buffer;
const fs = require('fs');
const textFile = require('./index.js');

describe('index.js', function() {
  describe('#read file', function() {
    it('Call text files in order regardless of size', function(cb) {
      textFile(function(text) {
        expect(text).to.be.equal([ 'e2809c4865617665', 'e2809c4f7574206f', 'e2809c4974207761' ]);
        cb();
      });
    });
  });
});
