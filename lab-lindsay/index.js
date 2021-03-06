'use strict';
const fs = require('fs');

module.exports = function() {
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
