/*
    Buffer（缓冲区）
        - Buffer的结构和数组很像，操作的方法也和数组类似
        - 数组中不能存储二进制的文件，buffer就是专门用来存储二进制数据
        - 使用buffer不需要引入模块，是node中扩充的一个对象
        - 在buffer中存储的都是二进制数据，但是在显示时都是以十六进制来显示
        - buffer中每一个元素的范围是从00~ff
        - 即00000000 ~ 11111111的范围，超出ff即取后8位
        - 在控制台或页面输出Buffer中的数字 会转为十进制 可用toString(n)
        - 计算机中 一个0 或 一个1 称为1位（bit）
        - 8bit = 1byte
        - buffer中的一个元素，占用内存的一个字节
        - 一个汉字占用三个字节
        - Buffer的大小一旦确定，无法修改，是对底层内存的直接操作
        - BUffer的所有构造函数都是不推荐使用的 要用类方法
*/

var str1 = 'cyx';
var str2 = '陈远翔';
//将一个字符串保存到buffer中
var buf1 = Buffer.from(str1);
var buf2 = Buffer.from(str2);
console.log(buf1,'\n',buf2);
console.log(str1.length,'\n',buf1.length);//占用内存的大小
console.log(str2.length,'\n',buf2.length);//字符串的长度

//创建指定大小的buffer
//BUffer的所有构造函数都是不推荐使用的 要用类方法
var _buf = Buffer.alloc(10); //10byte
//通过索引来操作buf的元素
_buf[0]=88;
_buf[1]=255;
_buf[2]=0xaa; //0x 表示十六进制  buffer也可以添加十六进制
// _buf[10]=128;
console.log(_buf.length);
console.log(_buf[2].toString(2));

//Buffer.allocUnsafe(size) 创建buffer 但可能包含敏感数据
var buf3 = Buffer.allocUnsafe(10);//没有清之前被使用过的内存
console.log(buf3);

/**
 * Buffer.from(str) 将一个字符串转换为Buffer
 * Buffer.alloc(size,fill[],encoding) 创建指定大小的Buffer
 * Buffer.allocUnsafe(size..) 可能包含敏感数据 
 * buf.toString() 可以转换为文本
 */

 var buf4 = Buffer.from("我是一段文本数据");

 console.log(buf4);
 
 console.log(buf4.toString());