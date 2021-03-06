# gulp-depsort

[![NPM version](https://badge.fury.io/js/gulp-depsort.png)](http://badge.fury.io/js/gulp-depsort) [![Build Status](https://travis-ci.org/adamrenklint/gulp-depsort.png?branch=master)](https://travis-ci.org/adamrenklint/gulp-depsort) [![Code Climate](https://codeclimate.com/github/adamrenklint/gulp-depsort.png)](https://codeclimate.com/github/adamrenklint/gulp-depsort) [![Dependency Status](https://david-dm.org/adamrenklint/gulp-depsort.png?theme=shields.io)](https://david-dm.org/adamrenklint/gulp-depsort)

> sort a set of files based in their internal references to each other

## Installation

```
$ npm install --save gulp-depsort
```

## Usage

In your gulpfile:
```
var depsort = require('gulp-depsort');

gulp.task('compile', function () {
  gulp.src('src/*.html')
    .pipe(depsort())
    .pipe(compileAndConcatTask())
    .pipe(gulp.dest('build'));
});
```

## Options

### Override sorting function

```
depsort({
  'sort': function (files) {
    //sort the array of files
    return files;
  }
});
```

## Stuff

- [MIT license](LICENSE)
- Made by [Adam Renklint](http://adamrenklint.com) in Berlin, February 2015

## Changelog

- **1.0.0**
  - Initial release, ported from ```<bap>``` project
- **1.1.0**
  - Added unit tests
  - Fixed regexp to ignore false positives
- **1.1.1**
  - Added readme banners for CI status, code quality, up-to-date dependencies