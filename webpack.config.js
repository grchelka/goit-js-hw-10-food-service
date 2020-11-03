const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'food-service.bundle.js'
    },

    devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3333
    }
};