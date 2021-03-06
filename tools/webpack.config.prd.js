const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function() {
    return webpackMerge(commonConfig(), {
        plugins: [
            new CleanWebpackPlugin('dist', {
                root: path.resolve(__dirname, '../dist')
            }),
            new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
            new UglifyJsPlugin({
                include: /\.min\.js$/,
                sourceMap: true,
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true
                    },
                    compress: {
                        warnings: false
                    },
                    output: {
                        beautify: false
                    }
                }
            })
        ],
        devtool: 'sourcemap'
    });
};
