'use strict';

var express             = require('express'),
    expressJwt          = require('express-jwt'),
    jwt                 = require('jsonwebtoken'),
    bodyParser          = require('body-parser'),
    cookieParser        = require('cookie-parser');

var secret = 'Your4w3s0me-S3cr3t';
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/public/Bookmarks'));

app.disable('x-powered-by');

// protect our api
app.use('/api', expressJwt({ secret: secret }));

// @endpoint [/authenticate]
app.post('/authenticate', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    if ( !(username === 'jsmith' && password === 'pword' )) {
        res.status(401).send('User or password is invalid.<br>Try jsmith / pword.');
    }

    var user = {
        name: 'Hello World',
        email: 'hello@example.com',
        id: 999
    };

    // generate the jwt token with our user info
    var token = jwt.sign(user, secret, {expiresIn: 7200});// two hours in seconds

    // the user object is included in the token!
    res.json({
        user: user,// this is the only intended reference in our extjs app
        token: token
    });
});

// @endpoint [/api/bookmarks]
app.get('/api/bookmarks', function (req, res) {
    var bookmarks = [{
        id: 1001, name: 'sencha', url: 'http://www.sencha.com',
    }, {
        id: 1002, name: 'jwt.io', url: 'http://jwt.io'
    }];
    res.json({data: bookmarks});
});

// more endpoints here...

app.listen(3000, function() {
    console.log('Express app listening on port 3000.');
});
