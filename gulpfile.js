/* Compile Sass File To Css File */
var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("sass",function(){
    return gulp.src("src/scss/base.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
});

gulp.task('watch',function(){
    gulp.watch('src/scss/*.scss',['sass']);
});

gulp.task('default',['sass','watch'])
