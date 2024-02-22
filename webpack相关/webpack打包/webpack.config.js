const path = require("path")

module.exports = {
    entry:"./index.js",
    mode:"development",
    output: {
        filename: '[name]-[hash:8]_bundle.js',
        path:path.resolve(__dirname,"dist"),
        //使用import动态导入的模块命名 webpackChunkName:xxx
        chunkFilename:'[name]-[hash:8]_chunk.js',
        clean:true
    },
    resolve:{
      //默认引入的文件拓展名
      extensions:['.js','.json',"jsx"],
    },
    plugins:[

    ],

}
