'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const Buffer = require('buffer').Buffer;
const reader = require('./../lib/reader.js');

describe('reader.js', function() {
  describe('asyncrity', function() {
    let order = reader.process();
    it('should come back as an array of 3 items', function() {
      expect(order).lengthOf.equal(3);
    });
    it('should come back as 3 strings', function() {
      expect(typeof order[0]).equal('string');
    });
    // it('should come back in the correct order; Large, Small, Medium', function() {
    //   expect(order[0]).lengthOf.above(order[1]);
    //   expect(order[2]).lengthOf.above(order[1]);
    //   expect(order[0]).lengthOf.above(order[2]);
    // });
  });
});
