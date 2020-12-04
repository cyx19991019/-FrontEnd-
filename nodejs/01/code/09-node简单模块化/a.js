// require是一个方法
// 用来加载模块
// 在node中 模块有三种：
//      具名的核心模块。例如fs\http
//      用户自己编写的文件模块
//          相对路径必须加./
//          可以省略后缀名
//      在node中没有全局作用域，只有模块作用域
//          外部访问不到内部 内部也访问不到外部，默认都是封闭
//      既然是模块作用域，那如何让模块与模块之间进行通信？
//      有时候加载文件模块的目的不是为了简简单单的执行里面代码，更重要是为了使用里面的成员



var foo = 'aaa';

console.log('start a');

function add(x,y){
    return x+y;
}

require('./b');

console.log('a end');

console.log(foo);