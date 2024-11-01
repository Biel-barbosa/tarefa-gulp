const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin');

function comprimeImgs() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJs() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build/styles'));
}


function dizOi(callback) {
    console.log('Oi!');
    callback(); 
}

exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.javascript = comprimeJs
exports.images = comprimeImgs