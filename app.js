var http = require('http');
var url = require('url');

http.createServer(function(req, res){
   var pathName = url.parse(req.url).pathname;
   console.log('Request for ' + pathName + ' received.');
   if(pathName == '/getData'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      //var games = {"Konami": "Metal Gear Solid", "Square": "Final Fantasy", "Bandai": "Super Robot War", "Enix": "Dragon Quest", "Ubisoft": "Assassin Creed", "Santa Monica": "God of War"};
      var games = {"games":["Metal Gear Solid", "Final Fantasy", "Super Robot War", "Dragon Quest", "Assassin Creed", "God of War"]};
      res.write(JSON.stringify(games));
      res.end();
   }else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<h1>FBB Data Provider</h1>');
      res.end('<p>Hello FBB!</p>');
   }
}).listen(3000);
