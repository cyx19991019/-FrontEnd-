/**
    
 */

 var fs = require('fs');

//异步文件写入
//     1.打开文件
        // fs.open(path,flags[,mode], callback)
        //      -callback
        //      -异步调用的方法都是通过回调函数参数返回结果
        //      -回调函数有两个参数：
        //          error 错误对象，如果没有错误则为null
        //          fo  文件描述符

//     2.写入
        // fs.write(fo, string[, position, encoding]], callback)
        //      - fo 文件的描述符 需要传递要写人的文件的描述符
        //      - string 要写的内容
        //      -position 写入起始位置 可选 一般不写
        //      -encoding 写入的编码 默认uft-8 一般不写
        //

//     3.保存并关闭
        //fs.close(fo, callback)


//异步方法不能 var fo = ...
fs.open('hello2.txt','w',function(error, fo){
    // console.log(arguments);
    if(error)
        return console.log(error);
    console.log(fo);
    fs.write(fo,"这是异步写入的内容",20,function(error){
        if(error)
            return console.log(error);
        console.log("写入成功");
    })
    fs.close(fo, function(err){
        if(error)
            return console.log(error);
        console.log('关闭成功');
    });
})

console.log('程序向下执行');