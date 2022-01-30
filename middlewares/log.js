exports.logger = logger;

function logger( req, res, next ){
    console.log( req.url );
    next();
}