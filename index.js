var server = require("./Server_UI_HTTP");
var router = require("./router");
var requestHandlers = require("./handler_UI_HTTP");


/**
 *	To add other requests
 *	- Add a function at the appropiate handlers file
 *  - Add a reference to the function at handle object
 */
var handle = {}
handle["helloWorld"]  = requestHandlers.helloWorld_H;
handle["index"]       = requestHandlers.index_H;
handle["somerequest"] = requestHandlers.somerequest_H;
handle["proccess"]    = requestHandlers.proccess_H;


server.start_UI_HTTP(8284, router.route, handle);
server.start_HTTP(8283, router.route, handle);