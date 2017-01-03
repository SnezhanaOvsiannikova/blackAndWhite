var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('sass', function() {
	return gulp.src('./app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function() {
	return gulp.watch('./app/scss/*.scss', ['sass']);
});

gulp.task('jade', function() {
	var YOUR_LOCALS = {};
	var config = {
		locals: YOUR_LOCALS,
		basedir: __dirname
	};
 
	gulp.src('./app/html/*.jade')
		.pipe(jade(config))
		.pipe(gulp.dest('./app/html/'));

    gulp.src('./app/html/**/*.jade')
    	.pipe(jade(config))
    	.pipe(gulp.dest('./app/html/'));
});

gulp.task('jade:watch', function() {
  gulp.watch('./app/html/*.jade', ['jade']);
  gulp.watch('./app/html/**/*.jade', ['jade']);
});

gulp.task('start', ['sass', 'sass:watch', 'jade', 'jade:watch']);