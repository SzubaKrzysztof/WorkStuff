var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var svgo = require('gulp-svgo');
var livereload = require('gulp-livereload');
var webpackStream = require('webpack-stream');
var sort = require('gulp-sort');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var export_sass = require('node-sass-export');
var dedupe = require('gulp-dedupe');
var gzip = require('gulp-gzip');
var zip = require('gulp-zip');
var gulpIgnore = require('gulp-ignore');
var stripCssComments = require('gulp-strip-css-comments');
var strip = require('gulp-strip-comments');
var gulpCopy = require('gulp-copy');
var trimlines = require('gulp-trimlines');
var removeEmptyLines = require('gulp-remove-empty-lines');
var htmlmin = require('gulp-htmlmin');


gulp.task('scss', function() {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass(
      {
        functions: export_sass('.')
      }
    ).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('output/'))
});

gulp.task('es6', function() {
  return gulp.src('js/es6/entry.js')
    .pipe(webpackStream({
      entry: ['./js/es6/entry.js'],
      output: {
        filename: 'z_bundle.js'
      },
      compact: false,
      devtool: 'source-map', // 'source-map' in production !!
      module: {
        loaders: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query:
            {
              presets:[['es2015', {cacheDirectory:true}]]
            }
          }
        ]
      }

    }).on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); this.emit('end'); })
  ).pipe(gulp.dest('js/lib'))
});
// fix sliders 
gulp.task('js', ['es6'], function() {
  return gulp.src('./js/lib/**/*.js')
    .pipe(sort())
    .pipe(dedupe())
    .pipe(concat('bundle.js'))
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('output'));
});

gulp.task('watch', () => {
  gulp.watch('./styles/**/*.scss', ['scss']);
})

gulp.task('watch_es6', () => {
  gulp.watch('./js/**/*.js', ['js']);
})
// gulp.task('sass-live', [], function() {
//   return gulp.src(SASS_FILES)
//     // .pipe(sourcemaps.init())
//     .pipe(sass(
//       {
//         functions: export_sass('.')
//       }
//     ).on('error', sass.logError))
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions'],
//       cascade: false
//     }))
//     // .pipe(sourcemaps.write())
//     .pipe(gulp.dest('css/'))
//     // .pipe(livereload())
// });


// gulp.task('minify-css', ['sass'], function() {
//   return gulp.src('css/style.css')
//     .pipe(cleanCSS({ compatibility: 'ie8', debug: true}, (details) => {
//       console.log(`${details.name}: ${details.stats.originalSize}`);
//       console.log(`${details.name}: ${details.stats.minifiedSize}`);
//     }))
//     .pipe(gzip({ extension: 'gzip' }))
//     .pipe(gulp.dest('css'))
// });

// gulp.task('minify-css-live', ['sass-live'], function() {
//   return gulp.src('css/style.css')
//     .pipe(stripCssComments('css/style.css'))
//     .pipe(cleanCSS({ compatibility: 'ie8', debug: true}, (details) => {
//       console.log(`${details.name}: ${details.stats.originalSize}`);
//       console.log(`${details.name}: ${details.stats.minifiedSize}`);
//     }))
//     .pipe(gzip({ extension: 'gzip' }))
//     .pipe(gulp.dest('css'))
// });

// gulp.task('compress-images', ['svgo'], function() {
//   return gulp.src(['images/**/*', '!images/**/*.svg'])
//     .pipe(imagemin())
//     .pipe(gulp.dest('images'))
// });


// gulp.task('svgo', function() {
//   return gulp.src('images/*.svg')
//     .pipe(svgo())
//     .pipe(gulp.dest('images/svgo'));
// });

// gulp.task('es6-live', function() {
//   return gulp.src('js/es6/entry.js')
//     .pipe(webpackStream({
//       entry: ['./js/es6/entry.js'],
//       output: {
//         filename: 'z_bundle.js'
//       },
//       compact: false,
//       devtool: 'source-map', // 'source-map' in production !!
//       module: {
//         loaders: [
//           {
//             test: /\.js?$/,
//             exclude: /node_modules/,
//             loader: "babel-loader",
//             query:
//             {
//               presets:[['es2015', {cacheDirectory:true}]]
//             }
//           }
//         ]
//       },

//     }).on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); this.emit('end'); })
//   ).pipe(gulp.dest('js/lib/'))

// });

// gulp.task('compress-scripts', ['live-scripts'], function() {
//    return gulp.src('js/live/*.js')
//     .pipe(strip())
//     .pipe(uglify().on('error', function(e){
//             console.log(e);
//          }))
//     .pipe(gulp.dest('js/live'))
//     .pipe(gzip({ extension: 'gzip' }))
//     .pipe(gulp.dest('js/live'));
// });

// gulp.task('compress-scripts-live', ['live-scripts-live'], function() {
//    return gulp.src('js/live/*.js')
//     .pipe(uglify().on('error', function(e){
//             console.log(e);
//          }))
//     .pipe(gulp.dest('js/live'))
//     .pipe(gzip({ extension: 'gzip' }))
//     .pipe(gulp.dest('js/live'));
// });

// gulp.task('live-scripts', ['es6'], function() {
//   return gulp.src(JS_FILES)
//     .pipe(sort())
//     .pipe(dedupe())
//     .pipe(concat('compiled.js'))
//     .pipe(gulp.dest('js'))
//     .pipe(rename('shop.js'))
//     .pipe(uglify({
//         mangle: true,
//         output: {
//             beautify: false,
//             comments: false
//         }
//     }))
//     .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
//     .pipe(gulp.dest(JS_DEST));
// });

// gulp.task('live-scripts-live', ['es6-live'], function() {
//   return gulp.src(JS_FILES)
//     .pipe(sort())
//     .pipe(dedupe())
//     .pipe(concat('compiled.js'))
//     .pipe(gulp.dest('js'))
//     .pipe(rename('shop.js'))
//     .pipe(uglify({
//         mangle: true,
//         output: {
//           beautify: false,
//           comments: false
//         }
//     }))
//     .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
//     .pipe(gulp.dest(JS_DEST));
// });

// gulp.task('zip-tpl', ['copy-live-tpl'], function() {
//   gulp.src([
//     'translation/*'
//     ])
//     .pipe(gulp.dest(LIVE_TPL_DEST))

//     return  gulp.src(['live/**', '!live/gfx/*'])
//         // .pipe(gulpIgnore.exclude('live/gfx'))
//         .pipe(zip('Templates.zip'))
//         .pipe(gulp.dest('dist'))

// });

// gulp.task('zip-all', function() {
//   return gulp.src(['css/*', 'js/live/*', 'templates/*', 'images/*','translation/*','other/*'])
//         .pipe(gulpIgnore.exclude('*.zip'))
//         .pipe(zip('ArchiveALL.zip'))
//         .pipe(gulp.dest('dist'))
// });

// gulp.task('dev-watch', ['sass'], function() {
//   livereload.listen();
//   gulp.watch(SASS_FILES, ['sass']);
//   gulp.watch(JS_ES6_FILES, ['es6']);
//   gulp.watch(FILES_TO_RELOAD).on('change', function(e) { console.log(e); livereload.reload() });
// });


// gulp.task('copy-live-gfx', function(){
//   return gulp.src([
//     'js/live/*',
//     'css/*',
//     'images/*',
//     'other/*'
//     ])
//     .pipe(gulp.dest(LIVE_GFX_DEST))
// });

// gulp.task('copy-live-tpl', function(){
//   return gulp.src(['templates/*'])
//     .pipe(trimlines())
//     // .pipe(removeEmptyLines({
//     //   // removeSpaces: true,
//     //   // removeComments: true,
//     // }))
    
//     .pipe(gulp.dest(LIVE_TPL_DEST))
// });

// gulp.task('copy-live', ['copy-live-gfx', 'copy-live-tpl'], function () {
 
//     return gulp.src([
//       'translation/*'
//       ])
//       .pipe(gulp.dest(LIVE_TPL_DEST))
   
 
// });

// // DEV TASK
// gulp.task('default', ['dev-watch']);

// // LIVE TASK
// gulp.task('deploy-live', ['minify-css-live',  'compress-scripts-live'], function(){
  
//   //'compress-images',
  
//   gulp.start('copy-live');

 
//   // gulp.src(['templates/*'])
//   //       .pipe(gulpIgnore.exclude('*.zip'))
//   //       .pipe(zip('Templates.zip'))
//   //       .pipe(gulp.dest('dist'))

//   return gulp.src(['live/**'])
//         .pipe(gulpIgnore.exclude('*.zip'))
//         .pipe(zip('ArchiveALL.zip'))
//         .pipe(gulp.dest('dist'))
// });

// // DEVELOP
// gulp.task('deploy-dev', ['minify-css', 'compress-scripts'], function(){
//   gulp.src(['templates/*'])
//         .pipe(gulpIgnore.exclude('*.zip'))
//         .pipe(zip('Templates.zip'))
//         .pipe(gulp.dest('dist'))

//   gulp.src(['js/live/*'])
//         .pipe(gulpIgnore.exclude('*.zip'))
//         .pipe(zip('JS.zip'))
//         .pipe(gulp.dest('dist'))

//   gulp.src(['css/*'])
//         .pipe(gulpIgnore.exclude('*.zip'))
//         .pipe(zip('CSS.zip'))
//         .pipe(gulp.dest('dist'))

//   return gulp.src(['css/*', 'js/live/*', 'templates/*', 'images/*','translation/*','other/*'])
//         .pipe(gulpIgnore.exclude('*.zip'))
//         .pipe(zip('ArchiveALL.zip'))
//         .pipe(gulp.dest('dist'))
// });

