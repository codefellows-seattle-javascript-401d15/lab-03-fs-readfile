'use strict';

const reader = require('./lib/reader.js');
let order = [];
reader.getLarge(reader.getSmall, reader.getMedium, function(data){
  data.forEach(inst => console.log(inst));
}, order);
