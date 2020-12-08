const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: './src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(jpg|JPG|png)$/,
                //处理不了html中的图片
                //下载url-loader和file-loader
                loader:'url-loader',
                options: {
                    //图片小于8kb（一般8~12），就会被base64处理,在built.js里变成字符串形式 文件夹下不会生产相应图片
                    //优点：减少请求数量（减轻服务器压力）
                    //缺点：图片体积会更大（速度更慢）
                    limit:8*1024,
                    //可能有小问题：url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
                    //解析时会出现 [object Module]
                    //解决：关闭url-loader的es6模块化，使用commonjs解析
                    // esModule:false,
                    
                    //给图片进行重命名
                    //[hash:10]取图片前10位
                    //[ext]取文件原来扩展名
                    name:'[hash:10].[ext]',
                }
            },
            {
                test:/\.html$/,
                //专门处理HTML文件的img图片（引入，从而能被url-loader处理
                loader:'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}