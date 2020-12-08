/**
 * 文件系统 
 *      --通过node操作文件
 *      --require('fs')
 *      --所有操作都有两种形式 同步 和 异步
 *      --同步会阻塞程序的执行，只有完成当前操作，才会向下执行
 *      --异步不会阻塞，而是在操作完成时，通过回调函数将结果返回
 *     
 */

 var fs = require('fs');

 //同步文件写入
 //     1.打开文件
            // fs.openSync(path,flags[,mode])
            //      -path 要打开的路径
            //      -flags 打开文件要做的操作的类型(r：只读的； w：可写的)
            //      -mode 设置文件的操作权限，一般不传，默认
            // 返回值：
            //      该方法会返回一个文件的描述符作为结果，可以通过描述符来对文件操作

 //     2.写入
            // fs.writeSync(fo, string[, position, encoding]])
            //      - fo 文件的描述符 需要传递要写人的文件的描述符
            //      - string 要写的内容
            //      -position 写入起始位置 可选 一般不写
            //      -encoding 写入的编码 默认uft-8 一般不写
 //     3.保存并关闭
            //fs.closeSync(fo)

 //打开文件
var fo =fs.openSync('hello.txt',"w");
console.log(fo);
//写入文件
fs.writeSync(fo,"hello node", 20);
//关闭文件
fs.closeSync(fo);