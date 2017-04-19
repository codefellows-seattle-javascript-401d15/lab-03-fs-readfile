'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
  if(err) throw err;
  let oneData = data.toString('hex', 0, 8);
  console.log(oneData.toString());
  return oneData;
});

fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
  if(err) throw err;
  let twoData = data.toString('hex', 0, 8);
  console.log(twoData.toString());
  return twoData;
});

fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
  if(err) throw err;
  let threeData = data.toString('hex', 0, 8);
  console.log(threeData.toString());
  return threeData;
});
