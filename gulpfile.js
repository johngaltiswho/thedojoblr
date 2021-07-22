const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
// const webp = require('imagemin-webp');
// const minify = require('gulp-minify');
// const cleanCss = require('gulp-clean-css');
// var responsive = require('gulp-responsive');
// const purgecss = require('gulp-purgecss')


gulp.task('compress', () =>
  gulp.src('client/public/fullsize/*')
    .pipe(imagemin([
      imageminMozjpeg({quality: 85}),
      pngquant({quality: [0.5, 0.5]})
      // webp({
      //     quality: 80,
      //     preset: 'photo',
      //     method: 6
      // })
    ]))
    .pipe(gulp.dest('client/public/compressed/'))
);

// gulp.task('minify-css', () =>
//   gulp.src('public/css/stylesheet.css')
//   .pipe(cleanCss())
//   .pipe(gulp.dest('public/css/minified-stylesheet.css'))
// );
//
// gulp.task('create-responsive-images', () =>
//   gulp.src('development/photos/fullsize/*.{jpg,png}')
//   .pipe(
//     responsive({
//       '*.jpg': [
//         {
//           height: 60,
//           rename: { suffix: '-60px' }
//         },
//         {
//           height: 30,
//           rename: { suffix: '-30px' }
//         }
//       ]
//     })
//     .pipe(gulp.dest('development/photos/compressed/'))
//   )
// )
//
// gulp.task('purgecss', () => {
//   return gulp
//     .src('public/css/bootstrap4.2.1.css')
//     .pipe(
//       purgecss({
//         content: ['views/about-us.pug', 'views/careers.pug', 'views/contact-us.pug', 'views/faq.pug', 'views/fulfillment.pug',
//         'views/index.pug', 'views/layout.pug', 'views/login.pug', 'views/privacypolicy.pug', 'views/returnpolicy.pug', 'views/shop.pug', 'views/shopunderconstruction.pug',
//         'views/route-plan.pug', 'views/termsofservice.pug', 'views/thank-you-for-contacting-us.pug', 'views/thankyou.pug', 'views/tracking-order.pug',
//         'views/tracking.pug']
//     })
//   )
//   .pipe(gulp.dest('public/css/used.boostrap4.2.1.min.css'))
// })
//
// // gulp.task('webp', () =>
// //     gulp.src('photos/fullsize/*')
// //     .pipe(webp({
// //         quality: 80,
// //         preset: 'photo',
// //         method: 6
// //     }))
// //     .pipe(gulp.dest('photos/webp/'))
// // );
// //
// // gulp.task('webp-lossless', () =>
// //     gulp.src('photos/fullsize/*')
// //     .pipe(webp({
// //         lossless: true
// //     }))
// //     .pipe(gulp.dest('photos/webp/'))
// // );
