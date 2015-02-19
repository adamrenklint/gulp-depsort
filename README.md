# gulp-depsort

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
  gulp.src('pages/**.html')
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