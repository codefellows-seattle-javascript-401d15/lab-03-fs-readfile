'use strict';

const fs = require('fs');

fs.readFileOne(`${__dirname}/data/one.txt`, function(err, data) {
  if(err) throw err;
  let dataOne = data.toString();
});

fs.readFileTwo(`${__dirname}/data/two.txt`, function(err, data) {
  if(err) throw err;
  let dataTwo = data.toString();
});

fs.readFileThree(`${__dirname}/data/three.txt`, function(err, data) {
  if(err) throw err;
  let dataThree = data.toString();
});
