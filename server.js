var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(5000, function(){
	console.log('listening on 5000...')
})

