'use strict';
const fs = require('fs');
const Buffer = require('buffer').Buffer;

module.exports = function(path1, path2, path3) {
  let hexArray = [];

  fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
    if(err) throw err;

    let firstBuffer = data.toString('hex', 0, 8);
    hexArray.push(firstBuffer);
    console.log(hexArray);

    fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
      if(err) throw err;

      let secondBuffer = data.toString('hex', 0, 8);
      hexArray.push(secondBuffer);
      console.log(hexArray);

      fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
        if(err) throw err;

        let thirdBuffer = data.toString('hex', 0, 8);
        hexArray.push(thirdBuffer);
        console.log(hexArray);
      });
    });
  });
  return hexArray;
};
module.exports();
