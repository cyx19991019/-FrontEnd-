//浏览器中的 JavaScript 是没有文件操作能力的
//但是 node 中的JavaScript 具有文件操作能力

//fs 是 filesystem的简写 就是文件系统的意思
//在node中如果想要进行文件操作，就必须引入 fs 这个核心模块
//例如 fs.readFile 就是用来读取文件的

// 1. 使用require方法加载fs核心模块
var fs = require('fs');

// 2. 读取文件
//    第一个参数就是要读取的文件路径
//    第二个参数是一个回调函数
//      error
//          如果读取失败 error 就是错误对象
//          如果读取成功 error 就是 null
//      data
//          如果读取成功 data 就是读取到的数据
//          如果读取失败 error 就是错误对象
//      即
//      成功
//          data 数据
//          error null
//      失败
//          data undefined
//          error 错误对象

fs.readFile('./data/hello.txt',function(error,data){
    if(error){
        console.log('读取文件失败\n',error);
    }
    else{
        console.log(data.toString());
    }
    
    
    //<Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73>
    //文件中存储的其实都是二进制数据 0 1
    //这里为什么看到的不是 0 1    因为 二进制转化为16进制了
    //但是无论是二进制还是十六进制 人类都不认识
    //所以我们可以通过 toString 方法
});