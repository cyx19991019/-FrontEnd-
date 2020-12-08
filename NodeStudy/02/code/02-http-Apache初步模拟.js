var http = require('http');
var fs = require('fs');
var server = http.createServer();
var wwwDir = 'D:/B站大学/nodejs/02/code/data';

server.on('request', function (req, res) {

    var url = req.url;
    if (url === '/') {
        fs.readFile(wwwDir + '/index.html', function (err, data) {
            if (err) {
                //return有2个作用
                //  1.方法返回值
                //  2.阻止代码继续往后执行
                return res.end('404');
            }
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.end(data);
        })
    } else if (url === '/a.txt') {
        fs.readFile(wwwDir + url, function (err, data) {
            if (err) {
                //return有2个作用
                //  1.方法返回值
                //  2.阻止代码继续往后执行
                return res.end('404');
            }
            res.setHeader('Content-Type', 'text/plain;charset=utf-8');
            res.end(data);
        })
    } else if (url === '/index,html') {
        fs.readFile(wwwDir + url, function (err, data) {
            if (err) {
                //return有2个作用
                //  1.方法返回值
                //  2.阻止代码继续往后执行
                return res.end('404');
            }
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.end(data);
        })
    }
    else {
        fs.readFile(wwwDir + url, function (err, data) {
            if (err) {
                //return有2个作用
                //  1.方法返回值
                //  2.阻止代码继续往后执行
                return res.end('404');
            }
            res.end(data);
        })
    }
})

server.listen(3000, function (a) {

    console.log('服务器启动成功 02');

})