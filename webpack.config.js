const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development', // 声明开发环境
    entry: './src/main.js', // 入口文件

    // 出口文件 __dirname 表示当前文件所在的目录
    output: {
        filename: 'bundle.js', // 打包后的文件名
        path: path.resolve(__dirname, './dist') // 打包后的文件存放的位置
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
                // filename: 'index_new.html',
                template: 'index.html',
                inject: true
            }
        ), // 自动生成入口页面
    ],
    devtool: '#cheap-module-eval-source-map', // 报错提示，仅限开发环境
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), // 本地服务器所加载的页面所在的目录
        inline: true, // 实时刷新
        historyApiFallback: true, //不跳转
        hot: true, // 热加载
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@static': path.resolve(__dirname, 'static'),
            '@home': path.resolve(__dirname, 'src/home')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-aaa.[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            }
        ]
    }
}