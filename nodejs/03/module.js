var a= 10;
console.log(global.a);
b=10;
console.log(global.b);

// console.log(arguments);

function showcallee() {
    var a = '这里是代码';
    var b = '这是另一段代码';
    var c = a + b;
 
    console.log(arguments.callee);
 
    return c;
}
showcallee();