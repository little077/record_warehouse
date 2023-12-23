export default {
    input: "./autoUploadPlugin.js", // 入口
    output: {
        file:'./dist/bundle.js', // 输出文件
        format: 'cjs', // 输出格式 amd / es / cjs / iife / umd / system
        name:'func',  // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
        sourcemap:true  // 生成bundle.js.map文件，方便调试
    }, // 出口
    external: [], // 外部依赖的配置
    plugins: [], // 各种插件使用的配置
    global: {}, // 全局变量的配置
  };