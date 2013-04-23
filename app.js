var http = require('http');
var url = require('url');

http.createServer(function(req, res){
   var pathName = url.parse(req.url).pathname;
   console.log('Request for ' + pathName + ' received.');
   res.writeHead(200, {'Content-Type': 'text/html'});
   if(pathName == '/getData'){
      res.write('<h2>Get Data!!!</h2>');
   }else{
      res.write('<h1>FBB Data Provider</h1>');
   }
   res.end('<p>Hello FBB!</p>');
}).listen(3000);
