var http = require('http');
var fs = require('fs');
var server = http.createServer();
var wwwDir = 'D:/B站大学/nodejs/02/code/data';

server.on('request', function (req, res) {

    var url = req.url;
    fs.readFile('./template.html', function (err, data) {
        if(err){
            return res.end('404');
        }
        //1.如何得到wwwDir目录列表中的文件名和目录名
        //  fs.readdir
        //2.如何将得到的文件名和目录名替换到template.html中
        //  模板引擎
        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return console.log('目录不存在');
            }
            console.log(files);

            var content = '';
            files.forEach(function (item,index) {
                content += `<p>${item}</p>`
            })

            data = data.toString();

            data.replace('..',content);
        })

        



        res.end(data);
    })

})

server.listen(3000, function (a) {

    console.log('服务器启动成功 02');

})