/* eslint-disable*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  resolve,
} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      /*
                  npm i eslint eslint-loader eslint-config-airbnb-base eslint-plugin-import -D

                      语法检查:eslint-loader eslint
                      注意：只检查自己写的源代码，第三方库不检查
                      设置检查规则：
                          package.json中eslintConfig中设置
                              "eslintConfig": {
                                  "extends": "airbnb-base"
                              }

                          airbnb --> eslint-config-airbnb-base eslint eslint-plugin-import

                          将这个注释// eslint-disable-next-line放在console上一行（这句话是 下一行不进行eslint检查）
                  */
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除第三方
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          fix: true, // 自动修复
        },
      },
      {
        test: /\.css%/,
        use: [
          MiniCssExtractPlugin.loader,
          'css=loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv(),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // 此时不能用style-loader
    new MiniCssExtractPlugin({
      // 对输出的文件进行重新命名
      filename: 'css/main.css',
    }),
    new OptimizeCssAssetsPlugin(),
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    open: true,
    compress: true,
    inline: true,
    historyApiFallback: true,
    port: 5000,
  },
};
/* eslint-disable*/
