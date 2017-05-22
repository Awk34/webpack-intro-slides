var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: './main.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    externals: {
        'reveal': 'Reveal'
    },
    module: {
        loaders: [
            {test: /\.css$/, loaders: ['style-loader', 'css-loader']},
            {test: /\.(eot|svg|ttf|woff|woff2)$/, loaders: ['file-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyWebpackPlugin([
            {from: {glob: 'content/*.md'}},
            {from: '../reveal.js/', to: __dirname + '/dist/reveal.js/'},
        ])
    ],
    devServer: {
        noInfo: true,
        port: 8081
    }
};