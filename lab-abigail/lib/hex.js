'use strict';

const fs = require('fs');

module.exports = function(onePath, twoPath, threePath, callback) {

  let textArray = [];

  fs.readFile(onePath, function(err, data) {
    if(err) throw err;
    let oneData = data.toString('hex', 0, 8);
    console.log(`First File: ${oneData}`);
    textArray.push(oneData);

    fs.readFile(twoPath, function(err, data) {
      if(err) throw err;
      let twoData = data.toString('hex', 0, 8);
      console.log(`Second File: ${twoData}`);
      textArray.push(twoData);

      fs.readFile(threePath, function(err, data) {
        if(err) throw err;
        let threeData = data.toString('hex', 0, 8);
        console.log(`Third File: ${threeData}`);
        textArray.push(threeData);

        if(textArray[2]) {
          callback();
          return console.log(textArray);
        }
      });
    });
  });
};
