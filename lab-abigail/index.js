'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
  if(err) throw err;
  console.log(data.toString('utf8', 0, 8));
  let oneData = data.toString();
});

fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
  if(err) throw err;
  console.log(data.toString('utf8', 0, 8));
  let oneData = data.toString();
});

fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
  if(err) throw err;
  console.log(data.toString('utf8', 0, 8));
  let oneData = data.toString();
});
