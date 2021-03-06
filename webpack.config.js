const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let devMode = true;
let mode = 'development';
let devtool = 'source-map';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    devtool = false;
    devMode = false;
    target = 'browserslist';
}
console.log(devMode, mode, devtool);
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name].[contenthash:8][ext]',
        clean: true,
    },
    mode: mode,
    devtool: devtool,
    target: target,

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(s[ac]|c))ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/assets/index.ejs',
            title: 'My webpack project',
        }),
    ],
    devServer: {
        contentBase: './dist',
        port: 8080,
        open: true,
        hot: true,
        watchContentBase: true,
    },
};
