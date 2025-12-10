const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function buildImage() {
    return gulp.src('build/src/assets/image/**/*.{jpg,png,jpeg,gif,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/image'))
};

function buildStyle(){
    return gulp.src('build/src/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({style: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/style'))
};

function buildScript(){
    return gulp.src('build/src/script/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('dist/script'))
}


exports.default = gulp.parallel(buildImage, buildStyle, buildScript);
exports.watch = function (){
    gulp.watch ('build/src/styles/*.scss', gulp.parallel(buildStyle));
    gulp.watch ('build/src/assets/image/**/*', gulp.parallel(buildImage));
    gulp.watch ('build/src/script/*.js', gulp.parallel(buildScript));
}


