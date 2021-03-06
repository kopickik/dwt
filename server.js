var express             = require('express'),
    bodyParser          = require('body-parser'),
    cookieParser        = require('cookie-parser'),
    mongo               = require('mongodb'),
    mongoose            = require('mongoose'),
    cors                = require('cors'),
    expressJwt          = require('express-jwt'),
    jwt                 = require('jsonwebtoken');

var secret = 'Your4w3s0me-S3cr3t';

var app = express();

app.use(cors());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.disable('x-powered-by');

app.use('/', express.static(__dirname + '/public/Bookmarks'));
// protect our api
app.use('/api', expressJwt({ secret: secret }));

// @endpoint [/authenticate]
app.post('/authenticate', function (req, res) {
    var username = req.body.userName;
    var password = req.body.password;

    if ( !(username === 'jsmith' && password === 'pword' )) {
        res.status(401).send('User or password is invalid.<br>Try jsmith / pword.');
        res.end();
    }
    else {
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
    }
    res.end();

});

// @endpoint [/api/bookmarks]
app.get('/api/bookmarks', function (req, res) {
    var bookmarks = [{
        id: 1001, name: 'sencha', url: 'http://www.sencha.com',
    }, {
        id: 1002, name: 'jwt.io', url: 'http://jwt.io'
    }, {
        id: 1003, name: 'github.com', url: 'http://github.com'
    }, {
        id: 1004, name: 'google.com', url: 'http://google.com'
    }, {
        id: 1005, name: 'twitter.com', url: 'http://twitter.com'
    }, {
        id: 1006, name: 'facebook.com', url: 'http://facebook.com'
    }, {
        id: 1007, name: 'amazon.com', url: 'http://amazon.com'
    }, {
        id: 1008, name: 'yahoo.com', url: 'http://yahoo.com'
    }, {
        id: 1009, name: 'bing.com', url: 'http://bing.com'
    }, {
        id: 1010, name: 'angularjs.org', url: 'http://angularjs.org'
    }, {
        id: 1011, name: 'randomkeygen.com', url: 'http://randomkeygen.com'
    }, {
        id: 1012, name: 'ponyfoo.com', url: 'http://ponyfoo.com'
    }, {
        id: 1013, name: 'w3schools.com', url: 'http://w3schools.com'
    }, {
        id: 1014, name: 'daringfireball.net', url: 'https://daringfireball.net/projects/markdown/basics'
    }, {
        id: 1015, name: 'palleton.com', url: 'http://paletton.com'
    }, {
        id: 1016, name: 'cssfontstack.com', url: 'http://www.cssfontstack.com'
    }, {
        id: 1017, name: 'es6.org', url: 'http://es6.org/features'
    }, {
        id: 1018, name: 'insignia', url: 'http://bevacqua.github.io/insignia'
    }, {
        id: 1019, name: 'addyosmani.com', url: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book'
    }, {
        id: 1020, name: 'wikipedia.org', url: 'http://en.wikipedia.org/wiki/Main_Page'
    }, {
        id: 1021, name: 'pinterest.com', url: 'http://pinterest.com'
    }, {
        id: 1022, name: 'theonion.com', url: 'http://theonion.com'
    }, {
        id: 1023, name: 'php.net', url: 'http://php.net'
    }, {
        id: 1024, name: 'laravel.com', url: 'http://laravel.com'
    }, {
        id: 1025, name: 'todomvc.com', url: 'http://todomvc.com'
    }];
    res.json({data: bookmarks});
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    next(err);
});


var serverPort = process.env.SERVER_PORT || 3000;
app.listen(serverPort, function() {
    console.log('Express app listening on port', serverPort);
});

export default app;
