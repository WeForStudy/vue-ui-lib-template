const path = require('path');

module.exports = {
    pages: {
        index: {
            entry: '/examples/main.js',
            template: '/public/index.html',
            filename: 'index.html',
        },
    },
    chainWebpack: config => {
        config.resolve.alias.set('ui-lib', path.resolve(__dirname, '/lib'));
        return config;
    }
}