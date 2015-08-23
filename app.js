var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    path = require('path');


//var mongoDB = require('mongodb'),
//    ObjectID = mongoDB.ObjectID,
//    mongoose = require('mongoose');
//
//mongoose.connect('mongodb://localhost:27017/freetty');

var winston = require('winston');
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            level: 'debug'
        }),
        new (winston.transports.File)({
            filename: './log.log'
        })
    ]
});

var bodyParser = require('body-parser'),
    multer = require('multer');

app.use(function (req, res, next) {
    res.charset = "utf-8";
    next();
});

app.use(bodyParser.json());
app.use(function (req, res, next) {
    if (req.method == "GET")
        req.passed = req.query;
    else
        req.passed = req.body;
    next();
});

app.use(multer({
    dest: './client/uploads/',
    rename: function (fieldname, filename) {
        function ran(length) {
            var result = "";
            var r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            for (var i = 0; i < length; i++) {
                result += r.charAt(parseInt(Math.random() * r.length));
            }
            return result;
        }

        return Date.now() + ran(5);
    },
    onFileUploadStart: function (file) {
    },
    onFileUploadComplete: function (file) {
    }
}));

var session = require('express-session'),
//cookie = require('cookie'),
    sessionStore = new session.MemoryStore(),
    cookieParser = require('cookie-parser'),
    COOKIE_SECRET = 'secret',
    COOKIE_NAME = 'sid';

app.use(cookieParser(COOKIE_SECRET));
app.use(session({
    name: COOKIE_NAME,
    store: sessionStore,
    secret: COOKIE_SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: {
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: null
    }
}));

app.use('/', express.static('dist'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});


http.listen(3000, function () {
    logger.info('listening on *:3000');
});

