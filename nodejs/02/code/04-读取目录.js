var fs = require('fs');

var wwwDir = 'D:/B站大学/nodejs/02/code/data';

//读取目录中的文件名和目录名
fs.readdir(wwwDir,function (err, files) {
    if (err) {
        return console.log('目录不存在');
    }
    console.log(files);
})