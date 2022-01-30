exports.notfound = notfound;
exports.error   = error;

function notfound( req, res, next ){
    res.send('not found ');
}

function error( err, req, res, next ) {
    console.log( err );
    res.send(' something is wrong '); 
}
