'use strict';

module.exports = exports = {};

const fs = require('fs');

// exports.getSmall = new Promise(function(resolve) {
//   fs.readFile(`${__dirname}/../text/small.txt`, function(err, data) {
//     if(err) throw err;
//     let smallData = data.toString();
//     if (resolve) resolve(smallData);
//   });
// });
//
// exports.getMedium = new Promise(function(resolve) {
//   fs.readFile(`${__dirname}/../text/medium.txt`, function(err, data) {
//     if(err) throw err;
//     let mediumData = data.toString();
//     if (resolve) resolve(mediumData);
//   });
// });
//
// exports.getLarge = new Promise(function(resolve) {
//   fs.readFile(`${__dirname}/../text/large.txt`, function(err, data) {
//     if(err) throw err;
//     let largeData = data.toString();
//     // retrevialOrder.push(largeData);
//     if (resolve) resolve(largeData);
//   });
// });

exports.getSmall = function() {
  fs.readFile(`${__dirname}/../text/small.txt`, function(err, data) {
    if(err) throw err;
    console.log(`small ${data.toString('hex', 0, 8)}`);
  });
};

exports.getMedium = function() {
  fs.readFile(`${__dirname}/../text/medium.txt`, function(err, data) {
    if(err) throw err;
    console.log(`medium ${data.toString('hex', 0, 8)}`);
  });
};

exports.getLarge = function() {
  fs.readFile(`${__dirname}/../text/large.txt`, function(err, data) {
    if(err) throw err;
    console.log(`large ${data.toString('hex', 0, 8)}`);
  });
};


exports.process = new Promise(function(resolve, reject) {
  // Array.prototype.push.apply(retrevialOrder, [exports.getLarge(), exports.getSmall(), exports.getMedium()]);
  // return retrevialOrder;
  let order = [];
  exports.getLarge(order.push);
  exports.getSmall(order.push);
  exports.getMedium(order.push);
  resolve(order);
  if(reject) throw reject;
});
