var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/js/root.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs',["import", { libraryName: "antd", style: "css" }]],
                }
            },
            // {
            //     test: /\.css$/,
            //     loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            // },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    }
}
