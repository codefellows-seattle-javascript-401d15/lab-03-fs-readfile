'use strict';

const fs = require ('fs');

module.exports = function(paths) {
  let buffData = [];
  fs.readFile(paths[0], function (err,data) {
    if(err) throw err;
    let buffDataOne = data.toString('hex', 0, 8);
    buffData.push(buffDataOne);
  });
  fs.readFile(paths[1], function (err,data) {
    if(err) throw err;
    let buffDataTwo = data.toString('hex', 0, 8);
    buffData.push(buffDataTwo);
  });
  fs.readFile(paths[2], function (err,data) {
    if(err) throw err;
    let buffDataThree = data.toString('hex', 0, 8);
    buffData.push(buffDataThree);
  });
  return buffData;
};
