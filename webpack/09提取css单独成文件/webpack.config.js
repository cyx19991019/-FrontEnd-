const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.(jpg|png|PNG|gif|JPG|gif)$/,
                loader:'url-loader',
                options:{
                    limit: 8 * 1024,
                    name:'[hash:10].[ext]',
                    outputPath:'img'
                }
            },
            {
                test:/\.css$/,
                use:[
                    //创建style标签 将样式放入
                    // 'style-loader',

                    //提取js中的css单独成文件
                    MiniCssExtractPlugin.loader, 
                    
                    //将css文件整合到js文件中
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        //此时不能用style-loader
        new MiniCssExtractPlugin({
            //对输出的文件进行重新命名
            filename:'css/main.css'
        })
    ],
    mode: 'development'
}