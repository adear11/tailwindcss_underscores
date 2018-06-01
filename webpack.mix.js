let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.sass('app.scss','build')
  .options({
      processCssUrls: false,
      postCss: [ tailwindcss('./tailwind-config.js') ],
  });
