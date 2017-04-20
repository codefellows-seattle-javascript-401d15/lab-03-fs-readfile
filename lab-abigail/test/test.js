'use strict';

const expect = require('chai').expect;
const textFile = require('../lib/hex.js');

describe('index.js', function() {
  describe('#Check quality and order of text file output', function() {

    let pathOne = '../data/one.txt';
    let pathTwo = '../data/two.txt';
    let pathThree= '../data/three.txt';

    it('Check Output Type: Output is not equal to a string and is an array', function() {
      textFile(pathOne, pathTwo, pathThree, testHexConsole);
      function testHexConsole(x) {
        expect(x).not.equal(typeof 'string');
        expect(x).to.be.equal(typeof 'array');
      }
    });

    it('Call text files in order regardless of size', function() {
      setTimeout(function(done) {
        textFile(pathOne, pathTwo, pathThree, testHexConsole);
        function testHexConsole(x) {
          expect(x).equal([ 'e2809c4865617665', 'e2809c4f7574206f', 'e2809c4974207761' ]);
        }
        done();
      }, 200);
    });
  });
});
