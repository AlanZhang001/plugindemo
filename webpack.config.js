let path = require('path');

module.exports = (env, argv) => {
    let isProdEnv = argv.mode === 'production';
    return {
        mode: isProdEnv ? 'production' : 'development',
        entry: {
            index: './src/index.js'
        },
        resolveLoader: {
            moduleExtensions: ['-loader']
        },
        stats: {
            entrypoints: true,
            // 添加构建模块信息
            modules: isProdEnv ? false : true,
        },
        module: {
            rules: [{
                test: /\.html$/,
                loader: 'text-loader'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader?cacheDirectory=true',
                }
            }]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            libraryTarget: 'umd',
            library: '[name]'
        },
        devtool: isProdEnv ? 'hidden-source-map' : 'source-map',
        watch: !isProdEnv
    };
};
