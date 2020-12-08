const http = require('html-webpack-plugin');
const {resolve} = require('path'); 

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'built.js',
        path: resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                exclude:/\.(css|js|html)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]'
                }
            }
        ]
    },
    plugins:[
        new http({
            template:'./src/index.html'
        })
    ],
    mode: 'development',

    //开发服务器 devServer：用来热部署。
    //没有输出 只会在内存中编译打包 不会有任何输出到本地代码
    //启动devServer指令为：npx webpack-dev-server
    devServer: {
        //构建后的项目路径
        contentBase: resolve(__dirname,'build'),
        //启动gzip压缩
        compress: true,
        //端口号
        port: 3000,
        //自动打开浏览器
        open: true,
        //实时刷新
        inline: true,
        //不跳转
        historyApiFallback: true
    }
}