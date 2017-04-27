
var http = require ('http'),
    module = require ('./module');


var player = module.newPlayer("daniel", 2 , 0);
player.plusBasket();
player.minusBasket();
player.plusMedal();

var loger = module.getLog;

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHeader(200);
   response.write(loger());
   // Send the response body as "Hello World"
   response.end();


}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
