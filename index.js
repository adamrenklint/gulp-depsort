var through = require('through2');
var tsort = require('tsort');

function sort (files) {

  var graph = tsort();
  var map = {};

  files.forEach(function (file) {

    var id = file.relative.split('/').pop().replace(/\.(\w+)$/, '');
    map[id] = file;
  });

  var ids = Object.keys(map);

  ids.forEach(function (id) {

    var file = map[id];
    var contents = file.contents.toString();

    ids.forEach(function (deepId) {
      var re = new RegExp(deepId, 'gi');
      var matches = contents.match(re);
      matches && matches.forEach(function (match) {
        if (match !== id && map[match]) {
          graph.add(match, id);
        }
      });
    });
  });

  var sorted = graph.sort().map(function (name) {
    return map[name];
  });

  return sorted;
}

module.exports = function gulpSort (params) {
    
  var files = [];
  params = params || {};

  return through.obj(function (file, enc, cb) {
    files.push(file);
    cb();
  }, function (cb) {
    var sorter = typeof params.sort === 'function' ? params.sort : sort;
    files = sorter(files);
    files.forEach(function (file) {
        this.push(file);
    }, this);
    cb();
  });
};