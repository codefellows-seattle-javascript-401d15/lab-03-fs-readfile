'use strict';

//require the filesystem
const fs = require('fs');

//read the file with the direct path
fs.readFile(`${__dirname}/../data/text.txt`, function(err, lyric){
  //if there's an error, stop everything and throw it
  if(err) throw err;
  //print filtered characters, offset by a number to include the full list
  console.log(Buffer(lyric).toString('hex', 0, 9));
  console.log(Buffer(lyric).toString('utf-8', 0, 9));
  // print the full thing, because Tupac
  console.log(Buffer(lyric).toString('utf-8'));

  //read the file with the direct path, with a differentiation of the parameter naming
  fs.readFile(`${__dirname}/../data/new-lyric.txt`, function(err, newLyric){
    //if there's an error, stop everything and throw it
    if(err) throw err;
    //print filtered characters, offset by a number to include the full list
    console.log(Buffer(newLyric).toString('hex', 0, 9));
    console.log(Buffer(newLyric).toString('utf-8', 0, 9));
    // print the full thing, because Tupac
    console.log(Buffer(newLyric).toString('utf-8'));
  });

  //read the file with the direct path, with a differentiation of the parameter naming
  fs.readFile(`${__dirname}/../data/newest-lyric.txt`, function(err, newestLyric){
    //if there's an error, stop everything and throw it
    if(err) throw err;
    //print filtered characters, offset by a number to include the full list
    console.log(Buffer(newestLyric).toString('hex', 0, 9));
    console.log(Buffer(newestLyric).toString('utf-8', 0, 9));
    // print the full thing, because Tupac
    console.log(Buffer(newestLyric).toString('utf-8'));
  });
});
