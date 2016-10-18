var gulp=require('gulp'),
	minifycss=require('gulp-minify-css');
	concat=require('gulp-concat'),
	uglify=require('gulp-uglify'),
	rename=require('gulp-rename'),
	del=require('del');
	 
/* 压缩CSS */
gulp.task('minifycss',function(){
	return gulp.src('app/css/*.css')
		.pipe(rename({suffix: '.min'})) 
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
})
gulp.task('minifyjs', function() {
    return gulp.src('app/js/*.js')        
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dist/js'));  //输出
});

gulp.task('clean', function(cb) {
    del(['minified/css', 'minified/js'], cb)
});
7

gulp.task('default', function() {
    gulp.start('minifycss', 'minifyjs');
});