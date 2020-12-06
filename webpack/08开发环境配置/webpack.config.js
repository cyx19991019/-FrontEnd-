/**
 * 开发环境的配置：能让代码运行成功
 * 运行指令：
 *      webpack 会将打包结果输出出去
 *      npx webpack-dev-server 只会在内存编译打包，不会输出结果
 */


const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
            test:/\.css$/,
            use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|PNG|gif|JPG|gif)$/,
                loader:'url-loader',
                options:{
                    limit: 8 * 1024,
                    name:'[hash:10].[ext]',
                    outputPath:'img'
                }
            },
            //处理html中的img资源
            {
                test:/\.(html)$/,
                loader:'html-loader',
            },
            {
                exclude:/\.(css|js|html|less|jpg|png|PNG|JPG|gif)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',
    devServer:{
        contentBase:resolve(__dirname,'build'),
        open:true,
        compress:true,
        inline:true,
        historyApiFallback:true,
        port:5000
    }
}