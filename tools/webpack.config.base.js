const path = require('path');

module.exports = function () {
    return {
        context: path.resolve(__dirname, '../src'),
        entry: {
            'app': './app.js',
            'app.min': './app.js'
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].js',
            sourceMapFilename: './map/[file].map',
            library: 'app',
            libraryTarget: 'umd'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [ 'to-string-loader', 'css-loader' ]
                }
            ],
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true,
                        formatter: require("eslint-friendly-formatter")
                    }
                }
            ]
        },
        externals: {
        }
    }
};
