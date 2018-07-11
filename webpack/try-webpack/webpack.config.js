// 手写webpack配置  标准流程

const path = require('path');    // 引入path模块   
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')   // 打包html文件的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin')   // 打包时，CSS文件打包成js文件 extract-text-webpack-plugin插件使CSS文件分离出来
const CopyWebpackPlugin = require('copy-webpack-plugin')
// console.log(path.resolve(__dirname, 'dist'));
module.exports = {      // 接受模块化输出
    entry: './src/index.js',              // 入口
    output: {                              // 输出
        path: path.resolve(__dirname, 'dist'),    // 解决路径问题   path.resolve() 
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader'
            },
            {
                test: /\.less$/,      // $ 正则表达式结束符
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),       // []占位符 
        new HtmlWebpackPlugin({
            file: 'index.html',
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([
            { from: 'src/assets/favicon.ico', to: 'favicon.ico' }
        ]),
        new webpack.ProvidePlugin({      // webpack.ProvidePlugin插件（无需安装，引入就行）--将框架引入到代码中  lodash作为工具库，是很多组距都会使用的，省去了到场import
            '_': 'lodash'
        })
    ],
    devServer: {
        port: '1314',
        before(app) {     // 钩子
            app.get('/api/test.json', (req, res) => {
                res.json({               // 假接口
                    code: 200,
                    message: 'hello world'
                })
            })
        }
    },
    resolve: {
        alias: {
            utils: path.resolve(__dirname,'src/utils')
        },
        extensions: ['.js', '.json', '.css', '.less']
    }  
}