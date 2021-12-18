const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('javasweb-backend/resources/js/app.js', 'public_html/js')
    .postCss('javasweb-backend/resources/css/app.css', 'public_html/css', [
        require('tailwindcss')
    ])
    .postCss('javasweb-backend/resources/css/devs.css', 'public_html/css', [
        require('tailwindcss')
    ]);
