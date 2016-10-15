// Include gulp
var gulp = require('gulp');

// Include plugin
var less = require('gulp-less');
var path = require('path');

/* plug in url docu
	https://www.npmjs.com/package/gulp-install
	https://github.com/plus3network/gulp-less
	https://www.npmjs.com/package/gulp-watch
*/

gulp.task('less', function () {
	return gulp.src('less/*.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('css/dist'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('less/*.less', ['less']);
});