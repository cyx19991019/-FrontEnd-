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
})

ws.once('open', () => {
    console.log('可写流打开了');
})

ws.once('close', () => {
    console.log('可写流关闭了');
})

//pipe() 可以将可读流中的内容直接写到可写流中
rs.pipe(ws);