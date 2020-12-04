/*

    1.EcmaScript
        没有DOM BOM

    2.核心模块
        NODE为JavaScript提供了很多服务器级别的api，绝大多数都被包装到了一个具名的核心模块中了
        例如文件操作的 fs 核心模块，http服务器构建的 http 模块，path路径操作模块，os操作系统信息模块。。。
        require
        exports

    3.用户自定义模块
        require是一个方法
        用来加载模块
        在node中 模块有三种：
            具名的核心模块。例如fs\http
            用户自己编写的文件模块
                相对路径必须加./
                可以省略后缀名
            在node中没有全局作用域，只有模块作用域
                外部访问不到内部 内部也访问不到外部
        require方法有两个作用
            1.加载文件并执行
            2.拿到被加载文件模块导出的对象（exports）
                exports默认是空对象
                把所有需要外部访问的成员都挂载在exports的对象中

    4.第三方模块
*/

var os = require('os');

//获取当前机器的cpu信息
console.log(os.cpus());

//获取当前机器的内存
console.log(os.totalmem());

//用来操作路径
var path = require('path');

//获取扩展名
console.log(path.extname('c:/a/b/c/hello.txt'));

