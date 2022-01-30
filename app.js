var express = require('express');
var routes = require('./routes');
var errorHandlers = require('./middlewares/errorHandlers');
var log = require('./middlewares/log');

var app = express(),
    port = 3003;

app.set('view engine', 'ejs');

app.use( log.logger );
app.use( express.static( __dirname + "/static" ) );

app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/loginProcess', routes.loginProcess);
app.get('/chat', routes.chat);

// for test
app.get('/error', function( req, res, next ){
    next( new Error(' simple error ') );
});

app.use(errorHandlers.notfound);
app.use(errorHandlers.error );



app.listen(port, function () {
    console.log("listengin : http://localhost:" + port);
})