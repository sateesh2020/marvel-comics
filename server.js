var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser');

/****************
Activating Express Server
*****************/
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
/****************
Serving Client Folder
*****************/
app.use(express.static('client'));

/*****************
Body Parser for Requests & Responses
*****************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./server/config/routes')(app);
