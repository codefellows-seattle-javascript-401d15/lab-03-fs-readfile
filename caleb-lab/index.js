'use strict';

const readFiles = require('./lib/readFile.js');
const paths = [
  `${__dirname}/data/lyric.txt`,
  `${__dirname}/data/new-lyric.txt`,
  `${__dirname}/data/newest-lyric.txt`,
  `${__dirname}/data/lyric.txt`,
  `${__dirname}/data/new-lyric.txt`,
  `${__dirname}/data/newest-lyric.txt`,
];

readFiles(paths);
