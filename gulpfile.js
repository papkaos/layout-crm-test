/**
 * Created by Александр on 03.04.2017.
 */
var gulp = require('gulp'),
    pug = require('gulp-pug'),
    del = require('del'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename");

var paths = {
    html: ['./app/**/*.pug', '!./bower_components/**/*'],
    scss: ['./app/**/*.scss', '!./bower_components/**/*'],
    fonts: ['./app/assets/fonts/**/*.*'],
    img: ['./app/assets/img/**/*.*']
};

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('html', function(){
    return gulp.src(paths.html)
        .pipe(pug())
        .pipe(gulp.dest('build'))
});

gulp.task('sass', function () {
    return gulp.src(paths.scss)
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('build/assets'));
});

gulp.task('fonts', function(){
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('build/assets/fonts'))
});

gulp.task('img', function(){
    return gulp.src(paths.img)
        .pipe(gulp.dest('build/assets/img'))
});

gulp.task('watch', function() {
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.scss, ['sass']);
});

gulp.task('build', ['html', 'sass', 'fonts', 'img']);

gulp.task('default', ['watch', 'html', 'sass', 'fonts', 'img']);