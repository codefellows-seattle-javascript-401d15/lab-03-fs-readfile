'use strict';

module.exports = exports = {};

const fs = require('fs');

let retrevialOrder = [];

exports.getSmall = function() {
  fs.readFile(`${__dirname}/../text/small.txt`, function(err, data) {
    if(err) throw err;
    let smallData = data.toString();
    console.log(smallData);
    return smallData;
  });
};

exports.getMedium = function() {
  fs.readFile(`${__dirname}/../text/medium.txt`, function(err, data) {
    if(err) throw err;
    let mediumData = data.toString();
    return mediumData;
  });
};

exports.getLarge = function() {
  fs.readFile(`${__dirname}/../text/large.txt`, function(err, data) {
    if(err) throw err;
    let largeData = data.toString();
    return largeData;
  });
};

exports.process = function(callback) {
  Array.prototype.push.apply(retrevialOrder, [exports.getLarge(), exports.getSmall(), exports.getMedium()]);
  callback(retrevialOrder);
};

exports.after = function(data) {
  console.log(data);
};
