var through = require('through2'),
  gutil = require('gulp-util'),
  compile = require('elegant.def/src/compile');

module.exports = function (opts) {
  'use strict';

  // see 'Writing a plugin'
  // https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
  return through.obj(function (file, enc, cb) {

    // Do nothing if no contents
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      return cb(new gutil.PluginError('gulp-def', 'Streaming not supported'));
    }

    if (file.isBuffer()) {
      file.contents = new Buffer(compile(String(file.contents), opts));
      this.push(file);
    }

    return cb();
  });
};
