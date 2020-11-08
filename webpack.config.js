const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'food-service.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader',
                ],
            },
            { 
                test: /\.handlebars$/, 
                loader: "handlebars-loader" 
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      name: '[path][name].[ext]',
                      limit: 8192,
                      esModule: false,
                    },
                  },
                  'img-loader',
                ],
            },
        ],
    },

    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3333,
        open: true,
        stats: 'errors-only'
    }
};