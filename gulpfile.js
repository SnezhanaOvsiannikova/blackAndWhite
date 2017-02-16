var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
	return gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('jade', function() {
	var YOUR_LOCALS = {};
	var config = {
		locals: YOUR_LOCALS,
		basedir: __dirname
	};
 
	gulp.src('./index.jade')
		.pipe(jade(config))
		.pipe(gulp.dest('./'));
	gulp.src('./includes/*.jade')
    	.pipe(jade(config))
    	.pipe(gulp.dest('./includes/'));

});

gulp.task('jade:watch', function() {
  gulp.watch('includes/*jade', ['jade']);
  gulp.watch('./index.jade', ['jade']);
});

gulp.task('start', ['sass', 'sass:watch', 'jade', 'jade:watch']);