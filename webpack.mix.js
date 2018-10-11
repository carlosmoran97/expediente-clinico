let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/Expediente.js', 'public/js')
    .react('resources/js/Login.js', 'public/js')
   .sass('resources/sass/estilos-base.scss','public/css')
   .sass('resources/sass/expediente-clinico.scss','public/css')
   .sass('resources/sass/panel-admin.scss','public/css')
   .sass('resources/sass/panel-registro-consulta.scss','public/css')
   .sass('resources/sass/panel-superusuario.scss','public/css');
   


