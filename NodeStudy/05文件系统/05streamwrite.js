/*
    - 同步、异步、简单文件写入，都不适合大文件写入，性能较差，容易导致内存溢出。
    
    - fs.createWriteStream(path[,options])
        - 可以用来创建一个可写流
        - path
        - options 可选

    - 可以通过监听流的open和close事件来监听流的打开和关闭

    - on(事件字符串，回调函数)
        - 可以为对象绑定一个事件

    - once(事件字符串，回调函数)
        - 绑定一次事件 该事件将会在触发一次以后自动失效
*/

var fs = require('fs');

//流式文件写入
//创建一个可写流
var ws = fs.createWriteStream('hello3.txt');

//用于监听是否打开或关闭
ws.once('open', () => { //on 绑定长期有效事件  once 绑定一次有效事件
    console.log('流打开了');
})
ws.once('close', () => { //on 绑定长期有效事件  once 绑定一次有效事件
    console.log('流关闭了');
})

//写入 可以多次
ws.write('通过可写流写入文件的内容1\n');
ws.write('通过可写流写入文件的内容2\n');

//关闭
ws.end();