'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const livereload = require('gulp-livereload');

const compileLess = () => {
	return gulp.src(['main.less', 'print.less'])
		.pipe(less({
			paths: ['node_modules/']
		}))
		.pipe(gulp.dest('public/css/'))
		.pipe(livereload());
}

gulp.task('default', () => {
	livereload.listen();
	return gulp.watch('*.less', compileLess);
});
