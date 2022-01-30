var express = require('express');

var app = express();

app.get('*', function( req, res ){
    res.send("Response");
});

app.listen( 3003, function(){
    console.log("server listening ");
} );