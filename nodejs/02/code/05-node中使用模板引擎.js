//such as : art-template
//art-template不仅在浏览器使用，也可以在node中

var template = require('art-template');

var ret = template.render('hello {{ name }}', {
    name: 'jack'
})

console.log(ret);