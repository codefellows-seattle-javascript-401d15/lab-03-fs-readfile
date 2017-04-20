'use strict';

const fs = require('fs');

module.exports = function (paths){
  if(paths.length > 3 || paths.lenth < 3) throw new Error('must have 3 paths, fool');

  let [one, two, three] = paths;
  let bufferArray = [];

  fs.readFile(one, (err, lyric) => {
    if(err) throw err;
    bufferArray.push(lyric.toString('hex', 0, 8));
    // console.log(bufferArray);

    fs.readFile(two, (err, lyric) => {
      if(err) throw err;
      bufferArray.push(lyric.toString('hex', 0, 8));
      // console.log(bufferArray);

      fs.readFile(three, (err, lyric) => {
        if(err) throw err;
        bufferArray.push(lyric.toString('hex', 0, 8));
        // console.log(bufferArray);
        console.log(bufferArray);
      });
    });
  });
};
