


var gulp = require('gulp');
var gcmq = require('gulp-group-css-media-queries');
var csso = require('gulp-csso');

gulp.task('default', function () {
    gulp.src('dist/static/css/*.css')
        .pipe(gcmq())
        .pipe(csso())
        .pipe(gulp.dest('dist'));
});
