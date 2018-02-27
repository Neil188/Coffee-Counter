const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "/dist/assets"),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: ['style-loader',
                    'css-loader',
                    { loader: 'postcss-loader', 
                        options: { plugins: [autoprefixer]}, 
                    },
                    'sass-loader'],
            },          
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, '/dist'),
        publicPath: '/assets/',
        port: 3000,
    },
};
