var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var order = require('gulp-order');

gulp.task('js', function(){
  return gulp.src(['./public/app/*.js', './public/app/component/design_studio/*.js', './public/app/component/directives/*.js', './public/app/component/login/*.js', './public/app/component/map/*.js', './public/app/component/routing/*.js', './public/app/component/shop/*.js'])
  .pipe(plumber())
  .pipe(order([
    'app.js', '*.js'
  ]))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task("sass", function(){
  return gulp.src(["./public/assets/style/*.css"])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('all.css'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('./public/assets/style/*.css', ['sass']);
  gulp.watch('./public/app/*.js', ['js']);
  gulp.watch('./public/app/component/design_studio/*.js', ['js']);
  gulp.watch('./public/app/component/directives/*.js', ['js']);
  gulp.watch('./public/app/component/login/*.js', ['js']);
  gulp.watch('./public/app/component/map/*.js', ['js']);
  gulp.watch('./public/app/component/routing/*.js', ['js']);
  gulp.watch('./public/app/component/shop/*.js', ['js']);
});

gulp.task('default', ['watch', 'js', 'sass']);
