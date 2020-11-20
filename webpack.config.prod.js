var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base=require('./webpack.config.base')

module.exports = {
    ...base,
    mode: "production",
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    }
                }, 'css-loader']
            }
        ]
    },
    plugins: [
        ...base.plugins, // 继承自base的配置
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].css',
        })],

}


