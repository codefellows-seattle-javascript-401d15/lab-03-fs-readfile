'use strict';

const fs = require('fs');

module.exports = function(callback) {
  let fileArray = [];

  fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
    if(err) throw err;
    let dataOne = data.toString('hex', 0, 8);
    fileArray.push(dataOne);

    fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
      if(err) throw err;
      let dataTwo = data.toString('hex', 0, 8);
      fileArray.push(dataTwo);

      fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
        if(err) throw err;
        let dataThree = data.toString('hex', 0, 8);
        fileArray.push(dataThree);
        callback(fileArray);
      });
    });
  });
};

//Asycnhronous nested callback pattern-- a nested function won't run until the function directly above it has completely finished running.
