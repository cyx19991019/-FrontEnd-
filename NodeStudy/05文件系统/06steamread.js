/*
    - 流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
    - 

*/

var fs = require('fs');

//创建一个可读流
var rs = fs.createReadStream('lol.png');
var ws = fs.createWriteStream('lol.jpg');

rs.once('open', () => {
    console.log('可读流打开了');
})

rs.once('close', () => {
    console.log('可读流关闭了');
    //数据读取完毕，关闭可写流
    ws.end();
})

ws.once('open', () => {
    console.log('可写流打开了');
})

ws.once('close', () => {
    console.log('可写流关闭了');
})

//如果要读取流中数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
rs.on('data', (data) => { //读完后自动关闭
    // console.log(data.length);
    ws.write(data);
})
