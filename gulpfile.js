var elixir = require('laravel-elixir');
var scss   = require('postcss-scss');
var config = elixir.config;

require('laravel-elixir-stylelint');
require('laravel-elixir-scss-lint');
require('laralix-jshint');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = false;

elixir(function(mix) {

    mix.scssLint(['./resources/assets/sass/core.scss','./resources/assets/sass/media-query.scss','./resources/assets/sass/variables.scss'])
        .stylelint(['./resources/assets/css/if-you-dont-use-sass.css'])
        .styles([
            './resources/assets/foundation-ui-library/get-latest-from-repo.css'
        ],'./public/assets/css/vendor.css')
        .sass(['core.scss','media-query.scss'],'./public/assets/css/custom.css')
        .scripts([
            './resources/assets/foundation-ui-library/get-latest-from-repo.js'
        ],'./public/assets/js/')
        .jshint('./resources/assets/js/*.js')
        .version(['./public/assets/css','./public/assets/js'])
        .copy([
            './resources/assets/fonts'
        ],'./public/build/assets/fonts')
        .copy('./resources/assets/images','./public/build/assets/images')
});
