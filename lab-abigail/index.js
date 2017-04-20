'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readText = function(callback) {

  let text = [];
  fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
    if(err) throw err;
    let oneData = data.toString('hex', 0, 8);
    console.log(oneData);
    text.push(oneData);

    fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
      if(err) throw err;
      let twoData = data.toString('hex', 0, 8);
      console.log(twoData);
      text.push(twoData);

      fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
        if(err) throw err;
        let threeData = data.toString('hex', 0, 8);
        console.log(threeData);
        text.push(threeData);

        console.log(text);
        callback(text);
      });
    });
  });
};

exports.readText();
