/*
    webpackconfig.js webpack的配置文件
        作用：指示 webpack 干哪些活（当你运行webpack指令时 会加载里面的配置）

        所有构建的工具都是基于node平台运行的 模块化默认采用common.js
*/

const {resolve} = require('path');

module.exports = {
    //webpack配置
    //入口起点
    entry: './src/index.js',
    //输出
    output:{
        filename:'main.js',
        path:resolve(__dirname,'build')
    },
    //loader的配置
    module:{
        //详细loader配置
        rules:[
            {
                //匹配哪些文件
                test: /\.css$/, 
                //使用哪些loader进行处理
                use: [
                    //use数组中loader执行顺序：从右到左，从下到上，依次执行
                    //创建style标签 将js中的样式资源插入进去，添加到head中生效
                    'style-loader',
                    //将css文件以样式字符串的形式变成common.js模块加载js中
                    'css-loader'
                ]
            },
            {
                //匹配哪些文件
                test: /\.less$/, 
                //使用哪些loader进行处理
                use: [
                    //use数组中loader执行顺序：从右到左，从下到上，依次执行
                    //创建style标签 将js中的样式资源插入进去，添加到head中生效
                    'style-loader',
                    //将css文件以样式字符串的形式变成common.js模块加载js中
                    'css-loader',
                    //将less文件编译成css文件
                    'less-loader'
                ]
            }
        ]
    },
        //plugins的配置
        plugins:[
            //详细plugins配置

        ],
        //模式
        mode:'development', //开发模式
        // mode: 'production'
}