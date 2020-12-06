     var http = require('http');
     var fs = require('fs');

     var server = http.createServer();

     server.on('request', function (req, res) {

         // / index.html
         var url = req.url;
         if (url === '/') {
             fs.readFile('./resource/index.html', function (err, data) {
                 if (err) {
                     res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                     res.end('文件读取失败,稍后重启');
                 } else {
                     //data默认是二进制，可通过toString转
                     //res.end支持两种数据 二进制和字符串
                     res.setHeader('Content-Type', 'text/html;charset=utf-8');
                     res.end(data);
                 }
             })
         } else if (url === '/img') {
             fs.readFile('./resource/lol.png', function (err, data) {
                 if (err) {
                     res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                     res.end('文件读取失败,稍后重启');
                 } else {
                     //data默认是二进制，可通过toString转
                     //res.end支持两种数据 二进制和字符串
                     //图片无需编码
                     res.setHeader('Content-Type', 'image/png');
                     res.end(data);
                 }
             })

         }
     })

     server.listen(3000, function () {
         console.log('服务器启动成功。')
     })