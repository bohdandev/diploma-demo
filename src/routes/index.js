const path = require('path');
const fs = require('fs');
const _ = require('underscore');

fs.readdirSync(__dirname).forEach(function (file) {
  if (file === 'index.js') return;

  const mod = {};

  mod[path.basename(file, '.js')] = require(path.join(__dirname, file));


  _.extend(module.exports, mod);
});
