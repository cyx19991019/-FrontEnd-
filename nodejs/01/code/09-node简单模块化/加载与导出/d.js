//require方法有两个作用
//  1.加载文件并执行
//  2.拿到被加载文件模块导出的对象（exports）
//      exports默认是空对象
//      把所有需要外部访问的成员都挂载在exports的对象中


var ret = require('./e');
console.log(ret.add(1,2));
