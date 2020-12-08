var http = require('http');

var server = http.createServer();

server.on('request',function(req,res){
    //在服务器默认发送的数据，默认是utf8编码的内容
    //但是浏览器不知道你是utf8的内容
    //浏览器在不知道服务器响应内容的编码下，会按照当前操作系统的默认编码取解析
    //中文操作系统默认是gbk
    //在http协议中，Content-Type就是告诉对方我发送给你的数据内容是什么类型
    // res.setHeader('Content-Type','text/plain;charset=utf-8');
    // res.end("hello 世界");

    var url = req.url;

    if(url === '/plain'){
        //text/plain就是普通文本
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        res.end('hello 世界');
    }
    else if(url === '/html'){
        //如果你发送html格式字符串，则也要告诉浏览器我给你发送的是text/html文本
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<p>hello html<a href="">点我</a></p>');
    }
})

server.listen(5000,function(){
    console.log("服务器启动成功");
})