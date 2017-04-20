'use strict';
//require chai, buffer [node], and the filesystem
const expect = require('chai').expect;
const buffer = require('buffer').buffer;
const fs = require('fs');

//describe the full module
describe('fs module', function(){
  //describe what we're trying to do with the things in the module
  describe('#readFile', function(){
    //describe what we expect with the test
    it('should read a file and produce a raw buffer', done => {
      fs.readFile(`${__dirname}/../data/text.txt`, function(err, data){
        let bufferData = data;

        //we expect this to be the data that gets operated on in the index.js, and for it to be a type of buffer. I intend to ask for more clarification on the "from". I particularly hate writing things that I do not understand.
        expect(typeof bufferData).to.equal(typeof Buffer.from(''));

        //need more clarification on done(), but too tired to do a google search right now
        done();
      });
    });
    //describe what we expect with the test
    it('should read a file and produce a raw buffer', done => {
      fs.readFile(`${__dirname}/../data/new-lyric.txt`, function(err, data){
        let newBufferData = data; //differentiating these to make it more like the index.js

        //we expect this to be the data that gets operated on in the index.js, and for it to be a type of buffer. I intend to ask for more clarification on the "from". I particularly hate writing things that I do not understand.
        expect(typeof newBufferData).to.equal(typeof Buffer.from(''));

        //need more clarification on done(), but too tired to do a google search right now
        done();
      });
    });
    //describe what we expect with the test
    it('should read a file and produce a raw buffer', done => {
      fs.readFile(`${__dirname}/../data/newest-lyric.txt`, function(err, data){
        let newestBufferData = data; //differentiating these to make it more like the index.js

        //we expect this to be the data that gets operated on in the index.js, and for it to be a type of buffer. I intend to ask for more clarification on the "from". I particularly hate writing things that I do not understand.
        expect(typeof newestBufferData).to.equal(typeof Buffer.from(''));

        //need more clarification on done(), but too tired to do a google search right now
        done();
      });
    });
  });
});
