var through = require('through2');

module.exports = function gulpSort (params) {
    
  var files = [];
  params = params || {};

  return through.obj(function (file, enc, cb) {
    files.push(file);
    cb();
  }, function (cb) {

    var ids = files.map(function (file) {
      return file.relative.split('/').pop().replace(/\.(\w+)$/, '');
    }).join('>');
    var expected = ['foo', 'baz', 'barfoo'].join('>');
    if (expected !== ids) {
      throw new Error('Failed to sort files: expected ' + expected + ' but got ' + ids);
    }
    cb();
  });
};