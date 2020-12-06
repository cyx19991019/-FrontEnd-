var http = require('http');

var server = http.createServer();

//request 请求事件处理函数 需要接受两个参数
//  Request 请求对象
//      请求对象可以用来获取客户端的一些请求信息，例如请求路径
//  Response
//      响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response){
    //http://127.0.0.1:3000/    /
    //http://127.0.0.1:3000/a   /a
    //http://127.0.0.1:3000/foo/b   /foo/b
    console.log('收到客户端的请求了,请求路径是:'+request.url);
    console.log("请求我的客户端的ip地址和端口号",request.socket.remoteAddress,request.socket.remotePort);
    // response.end("hello nodejs");

    //由于现在的服务器很弱 无论什么请求 只能响应 hello nodejs
    //思考：
    //我希望当请求不同的路径的时候响应不同的结果
    //例如：
    //路径   默认是 /
    //当请求  /  index
    //        /login  登录
    //        /register  注册
    //        /haha  哈哈
    
    //1. 获取请求路径
            // req.url 获取到的是端口号之后的那部分路径
            // 也就是说 url 都是以 / 开头的
    //2. 判断路径处理响应

    var url = request.url;

    // if(url === '/')
    //     response.end('index page');
    // else if(url === '/login')
    //     response.end('login page');
    // else if(url === '/register')
    //     response.end('register page');
    // else if(url === '/haha')
    //     response.end('haha');
    // else
    //     response.end('404 NOT FOUND');

    if(url === '/products'){
        var products = [
            {
                name:'a',
                value: 1
            },
            {
                name:'b',
                value:2
            },
            {
                name:'c',
                value:3
            }
        ]
        //响应对象只能是二进制数据或字符串
        //数字 对象 数组 布尔值 都不行
        response.end(JSON.stringify(products));
    }
});

server.listen(3000,function(){ //function 可以忽略
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/  来进行访问');
});
