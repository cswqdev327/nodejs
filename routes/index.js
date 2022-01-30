
module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.chat = chat;

function index( req, res ) {
    // res.send('index');
    res.render('index', { title : "simple title" });
}

function login( req, res ) {
    res.send('login');
}

function loginProcess( req, res ) {
    res.redirect('/');
}

function chat( req, res ) {
    res.send('chat');
}