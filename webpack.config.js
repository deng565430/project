var path = require('path');
var webpack = require('webpack');
var APP_PATH = path.join(__dirname, 'public'); //网站根目录
var BUILD_PATH = path.join(__dirname, 'build'); //编译文件目录

module.exports = {
    //入口文件
    entry: [
        'webpack-hot-middleware/client',
        path.join(APP_PATH, 'src', 'index.jsx')
    ],
    //输出文件
    output: {
        //文件夹路径
        path: path.join(BUILD_PATH, 'js'),
        //网站访问路径
        publicPath: '/static/',
        //文件名
        filename: 'bundle.js'
    },
    module: {
        //为webpack为特定的文件做转换的中间件
        loaders: [{
            test: /\.jsx$/,
            loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015'],
            include: APP_PATH
        }]
    },
    //插件
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}