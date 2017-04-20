'use strict';

const fs = require('fs');
const Buffer = require('buffer').Buffer;

module.exports = function(paths) {
  let buffers = [];
  fs.readFile(paths[0], function(err, data) {
    if (err) throw err;
    console.log('utf-8 format: ', data.toString('utf-8', 0, 8));
    console.log('hexadecimal format: ', data.toString('hex', 0, 8));
    buffers.push(data.toString('hex', 0, 8));

    fs.readFile(paths[1], function(err, data) {
      if (err) throw err;
      console.log('utf-8 format: ', data.toString('utf-8', 0, 8));
      console.log('hexadecimal format: ', data.toString('hex', 0, 8));
      buffers.push(data.toString('hex', 0, 8));

      fs.readFile(paths[2],function(err, data) {
        if (err) throw err;
        console.log('utf-8 format: ', data.toString('utf-8', 0, 8));
        console.log('hexadecimal format: ', data.toString('hex', 0, 8));
        buffers.push(data.toString('hex', 0, 8));
      });
    });
  });
  
  return buffers;
};
