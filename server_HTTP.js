var http = require("http");
var url  = require("url");


function start_UI_HTTP(port, route, handle) {

	function onRequest( req, res ) {
		
		var postData = "";
		var pathname = url.parse(req.url).pathname;

		console.log("SERVER: Request Received.");
		console.log("SERVER: Request Path: " + pathname );

		req.setEncoding("utf8");

		req.addListener("data", function(postDataChunk) {
      		postData += postDataChunk;
      		console.log("Received POST data chunk '"+ postDataChunk + "'.");
    	});

    	req.addListener("end", function() {
			console.log(postData);
    		var data = JSON.parse( postData );
    		
      		route(pathname, res, handle, data);
    	});

	}

	http.createServer(onRequest).listen(port);

	console.log("Server Started on port: " + port );
}

exports.start_UI_HTTP = start_UI_HTTP;


