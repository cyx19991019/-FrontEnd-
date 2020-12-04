const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require("path");

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

            //打包其他资源(除了HTML/js/css以外的资源)
            {
                exclude:/\.(css|js|html)$/,
                loader:'file-loader'
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