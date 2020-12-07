const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostcssPresetEnv = require('postcss-preset-env');

//设置node环境变量
process.env.NODE_ENV = 'development';
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
//optimize-css-assets-webpack-plugin
module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    //创建style标签 将样式放入
                    // 'style-loader',

                    //提取js中的css单独成文件
                    MiniCssExtractPlugin.loader, 
                    
                    //将css文件整合到js文件中
                    'css-loader',

                    /**
                    * css兼容性处理：process --> postcss-loader postcss-preset-env
                            插件postcss-preset-env：帮postcss-loader找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式
                        
                        "browserslist":{
                            //与mode无关
                            //开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
                            "development":[
                                "last 1 chrome version",
                                "last 1 firefox version"
                            ],
                            //生产环境 ---> 默认是看生产环境
                            "production":[
                                ">0.2%",
                                "not dead",
                                "not op_mini all"
                            ] 
                        }
                    */

                     //使用loader的默认配置
                     // loader:'postcss-loader'
                     //修改配置
                     {
                         loader:'postcss-loader',
                         options:{
                            postcssOptions: {
                                plugins: [
                                        PostcssPresetEnv()
                                    ]
                                }
                         }
                     }
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
        }),
        //压缩css
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode: 'development'
}