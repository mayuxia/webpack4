let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    devServer:{ //开发服务器配置
        port: 8000, //端口号
        progress: true,
        contentBase: './dist',  //默认显示打包后的目录
        compress: true

    },
    mode:'production', //模式 默认两种，production(生产) ，development(开发) 
    entry:'./src/index.js',   //入口
    output:{
        filename:"bundle.[hash:8].js", //打包后的文件名
        path: path.resolve(__dirname,'dist') ,//{__dirname, "dist"}  //打包后的路径
    },
    plugins:[ //数组放着所有的webpack插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            hash: true,
            minify:{
                removeAttributeQuotes: true, //删除双引号
                collapseWhitespace: true, //去掉空格
            }
        })

    ]
}