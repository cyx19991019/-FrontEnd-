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

    //  response 对象有一个方法： write可以用来给客户端发送响应数据
    //  write 可以使用多次 但是最后一定要使用 end 来结束响应，否则客户端会一直等待
    response.write('hello\n');
    response.write('nodejs');
    //告诉客户端 我的话说完了 你可以呈递给用户看了
    response.end();

    //由于现在的服务器很弱 无论什么请求 只能响应 hello nodejs
    //思考：
    //我希望当请求不同的路径的时候响应不同的结果
    //例如：
    //路径   默认是 /
    //当请求  /  index
    //        /login  登录
    //        /register  注册
    //        /haha  哈哈
    
});

server.listen(3000,function(){ //function 可以忽略
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/  来进行访问');
});
