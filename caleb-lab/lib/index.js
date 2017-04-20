'use strict';

//require the filesystem
const fs = require('fs');
module.exports = exports = {};

exports.strings = [];

//read the file with the direct path
exports.firstBuffer = fs.readFile(`${__dirname}/../data/text.txt`, function(err, lyric){
  exports.firstString = Buffer(lyric).toString('hex', 0, 9);
  //if there's an error, stop everything and throw it
  if(err) throw err;
  //print filtered characters, offset by a number to include the full list
  console.log(Buffer(lyric).toString('hex', 0, 9));
  console.log(Buffer(lyric).toString('utf-8', 0, 9));
  // print the full thing, because Tupac
  console.log(Buffer(lyric).toString('utf-8'));
  exports.strings.push(Buffer(lyric).toString('hex', 0, 9));
});

//read the file with the direct path, with a differentiation of the parameter naming
exports.secondBuffer = fs.readFile(`${__dirname}/../data/new-lyric.txt`, function(err, newLyric){
  exports.secondString = Buffer(newLyric).toString('hex', 0, 9);
  //if there's an error, stop everything and throw it
  if(err) throw err;
  //print filtered characters, offset by a number to include the full list
  console.log(Buffer(newLyric).toString('hex', 0, 9));
  console.log(Buffer(newLyric).toString('utf-8', 0, 9));
  // print the full thing, because Tupac
  console.log(Buffer(newLyric).toString('utf-8'));
  // return exports.secondString;
});

//read the file with the direct path, with a differentiation of the parameter naming
exports.thirdBuffer = fs.readFile(`${__dirname}/../data/newest-lyric.txt`, function(err, newestLyric){
  exports.thirdBuffer.thirdString = Buffer(newestLyric).toString('hex', 0, 9);
  //if there's an error, stop everything and throw it
  if(err) throw err;
  //print filtered characters, offset by a number to include the full list
  console.log(Buffer(newestLyric).toString('hex', 0, 9));
  console.log(Buffer(newestLyric).toString('utf-8', 0, 9));
  // print the full thing, because Tupac
  console.log(Buffer(newestLyric).toString('utf-8'));
});


console.log(exports.firstString + exports.secondString + exports.thirdString);
