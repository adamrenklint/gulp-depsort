var gulp = require('gulp');
var depsort = require('./index');
var test = require('./lib/test');

gulp.task('test', function () {
  gulp.src('test/*.html')
    .pipe(depsort())
    .pipe(test());
});