var fs = require('fs');

//验证文件是否存在
var isExist = fs.existsSync('lol.jpg'); 
console.log(isExist);

/*
    - fs.statSync(path)
        - 获取文件状态
        - 它会返回一个对象，对象中保存了当前对象状态的相关信息
*/   
fs.stat('lol.png', (err, stat) => {
    //.isFile()
    //.isDirectory ...
    console.log(stat.isDirectory());
})


/*
    - fs.unlink(path,callback)
    - fs.unlinkSync(path)
        - 删除文件
*/

// fs.unlinkSync('hello.txt');


//读取文件目录
//readdir(path,options,fn)
//readdirSync(path,options)

fs.readdir('./', (err, files) => {
    if(err){
        return console.log(err);
    }
    console.log(files);
})

/*
    fs.truncate(path, len, fn)
    fs.truncateSync(path, len)
        - 截断文件
        - 将文件修改为指定大小
*/

// fs.truncateSync('hello2.txt', 6);

/*
    fs.mkdir(path, mode, callbak)
    fs.mkdirSync(path, mode)
        - 创建一个目录

    fs.rmdir(path, mode, callbak)
    fs.rmdirSync(path, mode)
        - 删除一个目录
*/

// fs.mkdirSync('hello')
// fs.rmdirSync('hello')

/*
    fs.rename(oldPath, newPath, fn)
    fs.renameSync(oldPath, newPath)
        - 对文件进行重命名
*/

// fs.rename('lol.jpg','a.jpg', (err) => {
//     if(!err){
//         console.log('修改成功');
//     }
// })


/*
    fs.watchFile(filename, options, listener)
        - 监视文件修改
        - fname: 文件名
        - options：配置选项
            - persistent boolean
            - interval int 间隔
        - listener：回调函数，当文件发生变化时，会执行
            - curr: 当前文件的状态
            - prev： 修改前文件的状态
            - 都是stat对象
*/

fs.watchFile('hello2.txt', {interval: 1000} , (curr, prev) => {
    console.log('修改前文件大小:'+prev.size);
    console.log('修改后文件大小：'+curr.size)
} )