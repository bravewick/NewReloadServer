function route(request, response, handle, postData) {

	console.log( "ROUTER: received request " + request + " with data " + postData );
	console.log(postData.method);
	
	if (typeof handle[postData.method] === 'function') {
    	handle[postData.method]( request, response, postData );
  	} 
  	else {
    	console.log("ROUTER: No request handler found for " + postData.method);

    	response.writeHead( 404, {"Content-Type": "text/plain"} );
		response.write( "Error: Handler for request " + postData.method + " was not found." );
		response.end();
  	}


}

exports.route = route;