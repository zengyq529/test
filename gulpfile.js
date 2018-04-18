/*引入gulp及相关插件 require('node_modules里对应模块')*/
var gulp = require('gulp');
/*var minifyCss = require("gulp-minify-css");

//压缩

gulp.task('minify-css', function () {
    gulp.src('public/stylesheets/!*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('public/dist/css/'));
});
*/

var px2rem = require('gulp-px2rem-plugin')





gulp.task('px2rem-plugin', function() {
    gulp.src('src/assets/css_src/*.css')
        .pipe(px2rem())
        .pipe(gulp.dest('src/assets/css/'))
})

gulp.task('default',['px2rem-plugin'])

gulp.watch('src/assets/css_src/*.css', function () {
    gulp.src('src/assets/css/*.css')
        .pipe(px2rem())
        .pipe(gulp.dest('src/assets/css/*.css'))
})
