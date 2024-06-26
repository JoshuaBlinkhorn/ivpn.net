let mix = require('laravel-mix');
let path = require('path');

require('laravel-mix-bundle-analyzer');
require('mix-env-file');

const VueI18nPlugin = require('@intlify/unplugin-vue-i18n/webpack')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.env(process.env.ENV_FILE);

mix.webpackConfig({
    resolve: {
        alias: {
            'lunr': 'lunr/lunr.min.js',
            '@': path.resolve('assets/js'),
            'scss': path.resolve('assets/scss'),
        }
    },
    plugins: [
        VueI18nPlugin({})
    ]
});

// if (mix.inProduction()) {
    // mix.bundleAnalyzer();
// }

mix.setPublicPath('static')
    .js('assets/js/app.js', 'static/js/').vue()
    .js('assets/js/servers.js', 'static/js/').vue()
    .js('assets/js/openvpn-config.js', 'static/js/').vue()
    .js('assets/js/search.js', 'static/js/').vue()
    .js('assets/js/menu.js', 'static/js/')
    .js('assets/js/wireguard.js', 'static/js/')
    .js('assets/js/localisation.js', 'static/js/')
    .sass('assets/scss/pages.scss', 'static/css/')
    .version();
