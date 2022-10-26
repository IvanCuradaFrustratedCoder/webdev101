const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    target: "web",
    experiments: {
        outputModule: false
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.bundled.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.m?js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
}