var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
    return sass('./sass', {
        // stopOnError: true
    })
    .on('error', function(err) {
    	gutil.log("CUSTOM ERROR HANDLER TRIGGERED");
        gutil.log(err.toString());
        process.exit(1);
    })
    .pipe(gulp.dest('./css'));
});