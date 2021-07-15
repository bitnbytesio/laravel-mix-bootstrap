const mix = require('laravel-mix');

// only related to page
mix.sass('src/sass/pages/index.scss', 'dist/assets/css/index.css')
   // // examples below
   // .sass('src/sass/pages/about.scss', 'dist/assets/css/product.css')
   // .sass('src/sass/pages/about.scss', 'dist/assets/css/about.css')
   // .sass('src/sass/pages/about.scss', 'dist/assets/css/contact.css')
   // only related to page
   .js('src/js/pages/about.js', 'dist/assets/js/about.js')
   // global/shared script
   .js('src/js/global.js', 'dist/assets/js')
   // vendor js
   .js('src/js/bootstrap.js', 'dist/assets/js')
   // vendor stylesheet
   .sass('src/sass/bootstrap.scss', 'dist/assets/css')
   .sass('src/sass/fontawesome.scss', 'dist/assets/css')
   // global/shared stylesheet
   .sass('src/sass/global.scss', 'dist/assets/css').options({
      processCssUrls: false,
   })
   // media
   .sass('src/sass/media.scss', 'dist/assets/css')
   //copy fonts
   .copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'dist/assets/webfonts')
   // finaly copy html and images
   .copy('src/assets', 'dist/assets')
   .copy('src/pages', 'dist/')
   .browserSync({
      server: {
         baseDir: 'dist',
         directory: true,
      },
      injectChanges: false,
      files: 'src/**/*',
   });
