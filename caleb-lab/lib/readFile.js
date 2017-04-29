'use strict';

const fs = require('fs');

module.exports = function (paths){
  if(paths.length > 6 || paths.length < 6) throw new Error('must have 3 paths, fool');

  let [one, two, three, four, five, six] = paths;
  // let [] = pathsTwo;
  let bufferArray = [];
  let tupacArray = [];

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
        fs.readFile(four, (err, lyric) => {
          if(err) throw err;
          tupacArray.push(lyric.toString('utf-8'));
          // console.log(tupacArray);

          fs.readFile(five, (err, lyric) => {
            if(err) throw err;
            tupacArray.push(lyric.toString('utf-8'));
            // console.log(tupacArray);

            fs.readFile(six, (err, lyric) => {
              if(err) throw err;
              tupacArray.push(lyric.toString('utf-8'));
              // console.log(tupacArray);
              console.log(tupacArray);
            });
          });
        });
      });
    });
  });
};
