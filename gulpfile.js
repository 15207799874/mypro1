var gulp=require('gulp'),
	minifycss=require('gulp-minify-css');
	concat=require('gulp-concat'),
	uglify=require('gulp-uglify'),
	rename=require('gulp-rename'),
	del=require('del');
	 
/* ѹ��CSS */
gulp.task('minifycss',function(){
	return gulp.src('app/css/*.css')
		.pipe(rename({suffix: '.min'})) 
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
})
gulp.task('minifyjs', function() {
    return gulp.src('app/js/*.js')        
        .pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
        .pipe(uglify())    //ѹ��
        .pipe(gulp.dest('dist/js'));  //���
});

gulp.task('clean', function(cb) {
    del(['minified/css', 'minified/js'], cb)
});
7

gulp.task('default', function() {
    gulp.start('minifycss', 'minifyjs');
});