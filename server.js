var express = require('express'),
	http = require('http'),
	app = express();

app.use(express.static(__dirname + '/files'));

http.createServer(app).listen(3000);