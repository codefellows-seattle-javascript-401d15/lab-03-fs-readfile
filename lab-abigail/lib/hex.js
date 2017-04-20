'use strict';

const fs = require('fs');

module.exports = function(onePath, twoPath, threePath, callback) {

  let textArray = [];

  fs.readFile(onePath, function(err, data) {
    if(err) throw err;
    let oneData = data.toString('hex', 0, 8);
    textArray.push(oneData);
    console.log(`First File: ${oneData}`);

    fs.readFile(twoPath, function(err, data) {
      if(err) throw err;
      textArray.push(data.toString('hex', 0, 8));
      console.log(`Second File: ${data.toString('hex', 0, 8)}`);

      fs.readFile(threePath, function(err, data) {
        if(err) throw err;
        textArray.push(data.toString('hex', 0, 8));
        console.log(`Third File: ${data.toString('hex', 0, 8)}`);

        if(textArray[2]) {
          callback(textArray);
          return textArray;
        }
      });
    });
  });
};
