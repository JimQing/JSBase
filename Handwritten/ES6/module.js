// 立即执行函数
(function () {
    var a = 1;
    return a;
})()

// AMD/CMD
// AMD
define(['./a', './b'], function (a, b) {
    // 加载模块完毕可以使用
    a.do()
    b.do()
})
// CMD
define(function (require, exports, module) {
    // 加载模块
    // 可以把 require 写在函数体的任意地方实现延迟加载
    var a = require('./a')
    a.doSomething()
})

// commonJS
// a.js
module.exports = {
    a: 1
}

// or
exports.a = 1;

// b.js
var module = require('./a.js');
module.a

// ES module
/**
 * 
    CommonJS 支持动态导入，也就是 require(${path}/xx.js)，后者目前不支持，但是已有提案
    CommonJS 是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响
    CommonJS 在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是 ES Module 采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化
    ES Module 会编译成 require/exports 来执行的
 */
// 引入模块 API
import XXX from './a.js'
import { XXX } from './a.js'
// 导出模块 API
export function a() {}
export default function() {}