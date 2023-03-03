const gulp  = require("gulp");
const { src, dest } = require('gulp');
const pug = require('gulp-pug');

exports.views = () => {
  return src('./src/*.pug')
    .pipe(
      pug({
        // Your options in here.
      })
    )
    .pipe(dest('./dist'));
};

export const dev = function () {
  console.log("dev 나왔다");
};
