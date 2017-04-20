'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/../data/text.txt`, function(err, lyric){
  if(err) throw err;
  console.log(Buffer(lyric).toString('utf-8', 0, 9));
  console.log(Buffer(lyric).toString('hex', 0, 9));
  
  fs.readFile(`${__dirname}/../data/new-lyric.txt`, function(err, newLyric){
    if(err) throw err;
    console.log(Buffer(newLyric).toString('utf-8', 0, 9));
    console.log(Buffer(newLyric).toString('hex', 0, 9));
  });

  fs.readFile(`${__dirname}/../data/newest-lyric.txt`, function(err, newestLyric){
    if(err) throw err;
    console.log(Buffer(newestLyric).toString('utf-8', 0, 9));
    console.log(Buffer(newestLyric).toString('hex', 0, 9));
  });

});
