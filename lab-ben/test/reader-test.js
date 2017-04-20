'use strict';

const expect = require('chai').expect;
const reader = require('./../lib/reader.js');
// let correct = [ '4d616563656e6173', '5065616e75744275', '5468697320697320' ];

describe('reader.js', function() {
  describe('asyncrity', function() {
    let order = [];
    it('should come back as an array of 3 items', function() {
      reader.getLarge(reader.getSmall, reader.getMedium, function(data) {
        console.log(data, 'order');
        expect(data).length.equal(3);
      }, order);
    });
    it('should come back as strings', function() {
      reader.getLarge(reader.getSmall, reader.getMedium, function(data) {
        console.log(data, 'order');
        expect(typeof order[0]).equal('string');
      }, order);
    });
    it('should come back in the correct order; Large, Small, Medium', function() {
      reader.getLarge(reader.getSmall, reader.getMedium, function(data) {
        console.log(data, 'order');
        expect(order[0]).equal('4d616563656e6173');
        expect(order[1]).equal('5065616e75744275');
        expect(order[2]).equal('5468697320697320');
      });
    });
  });
});
