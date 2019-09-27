const path = require('path');
const webpack = require('webpack');

function resolve(newPath) {
    return path.resolve(__dirname, newPath);
}

// const { NODE_ENV = 'production' } = process.env;

module.exports = {
    mode: 'development',
    devtool: 'cheap-source-map',
    entry: './source/index.js',
    output: {
        path: resolve('dist'),
        libraryTarget: 'umd',
        filename: 'index.js',
        globalObject: 'this',
        library: 'providers-frontend',
    },
    resolve: {
        extensions: ['.js'],
        alias: {},
    },
    externals: {
        lodash: 'lodash',
        immutable: 'immutable',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: resolve('./source'),
                options: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-2'],
                },
            },
        ],
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dgram: 'empty',
        child_process: 'empty',
    },
};
