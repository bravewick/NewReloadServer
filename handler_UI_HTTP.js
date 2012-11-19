function helloWorld_H(req, res, postData) {
	console.log("HANDLER UI_HTTP: helloWolrd Handler");

	//var response = JSON.stringify({"result":"resdsdsd"});
	//console.log("DATA: "+ response + " " + response.length);

	var versionInfoJSON = JSON.stringify({"version":5, "timestamp": 6});
		console.log(versionInfoJSON);
		res.writeHead(200, {
			'Content-Length': versionInfoJSON.length,
			'Content-Type': 'application/json'
		});
	res.write(versionInfoJSON);
	res.end("");
	/*res.writeHead(200, {
	  'Content-Length': response.length,
	  'Content-Type': 'text/plain'
	});*/
    /*res.json({ "home": "my"});
	res.end();*/

	/*res.writeHead( 200, {"Content-Type": "text/plain"} );
	res.write( "\"result\":\"result\"" );
	res.end();*/
}

function index_H(req, res, postData) {
	console.log("HANDLER UI_HTTP: index Handler");

	res.writeHead( 200, {"Content-Type": "text/plain"} );
	res.write( "index handler called" );
	res.end();
}

function somerequest_H(req, res, postData) {
	console.log("HANDLER UI_HTTP: somerequest Handler");

	res.writeHead( 200, {"Content-Type": "text/plain"} );
	res.write( "somerequest handler called" );
	res.end();
}

function proccess_H (req, res, postData) {
	console.log("HANDLER UI_HTTP: proccess Handler");
	res.writeHead(200, {
	  'Content-Length': response.length,
	  'Content-Type': 'text/json'
	});
	res.end("dfgdfgdfgdfg");
}

exports.helloWorld_H 	= helloWorld_H;
exports.index_H      	= index_H;
exports.somerequest_H	= somerequest_H;
exports.proccess_H	    = proccess_H;