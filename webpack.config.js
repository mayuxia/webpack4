let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    devServer:{ //开发服务器配置
        port: 8000, //端口号
        progress: true,
        contentBase: './dist',  //默认显示打包后的目录
        compress: true

    },
    mode:'development', //模式 默认两种，production(生产) ，development(开发) 
    entry:'./src/index.js',   //入口
    output:{
        filename:"bundle.[hash:8].js", //打包后的文件名
        path: path.resolve(__dirname,'dist'), //打包后的路径
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

    ],
    module:{ //模块
        rules:[ //规则
            {
                //css-loader 接续@import这种语法，
                //style-loader 它是把css插入到head标签中
                //loader 特点：单一
                //loader的用法： 字符串只用一个loader
                //多个loader需要[]
                //loader的顺序：默认是从右向左执行，从下到上执行
                //loader还可以写成对象方式
                test:/\.css$/, 
                use:[
                    {
                        loader:'style-loader',
                        options:{
                            insertAt:'top'
                        }
                    },
                    'css-loader'
                ]
            }
        ]

    }
}