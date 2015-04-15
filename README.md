# gulp-def
[![NPM version](https://badge.fury.io/js/gulp-def.svg)](https://npmjs.org/package/gulp-def)
[![GitHub version][git-tag-image]][project-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-url]][daviddm-image]
[![Coverage Status][coveralls-image]][coveralls-url]


gulp plugin for [elegant.def](https://github.com/qiu8310/elegant.def)

## Usage

First, install `gulp-def` as a development dependency:

```
npm install --save-dev gulp-def
```

Then, add it to your gulpfile.js:

```
var def = require('gulp-def');
gulp.src('./src/*.js')
    .pipe(def({
        defName: 'def'
    }))
    .pipe(gulp.dest('./dist'));
```    
    
## API

### def(options)

#### options.defName

Type: `String`
Default: `def`

Used for making sure it is a `def` function

[doc-url]: http://inch-ci.org/github/qiu8310/gulp-def
[doc-image]: http://inch-ci.org/github/qiu8310/gulp-def.svg?branch=master
[project-url]: https://github.com/qiu8310/gulp-def
[git-tag-image]: http://img.shields.io/github/tag/qiu8310/gulp-def.svg
[travis-url]: https://travis-ci.org/qiu8310/gulp-def
[travis-image]: https://travis-ci.org/qiu8310/gulp-def.svg?branch=master
[daviddm-url]: https://david-dm.org/qiu8310/gulp-def.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/qiu8310/gulp-def
[coveralls-url]: https://coveralls.io/r/qiu8310/gulp-def
[coveralls-image]: https://coveralls.io/repos/qiu8310/gulp-def/badge.png