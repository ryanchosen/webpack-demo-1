var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports={
    mode: "development",
    entry:'./src/index.js',
    output:{
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({title: '我就试试而已啦啦啦',template: './src/test.html'})],
}


