var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var users = require('./routes/user');
var station = require('./routes/station');
var hisreal = require('./routes/hisreal');
var hisdata = require('./routes/hisdata');
var session = require('express-session');
var app = express(); 

app.use(bodyParser.json()); //加载解析json中间件
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'Image')));
app.use(session({
  resave: true, 
  saveUninitialized: true,
  secret: 'sessiontest',
  name: 'sessionId',
  cookie: {
    path: '/',
    maxAge: 1800000,
    httpOnly:false
  },
}));
//路由控制器
app.use('/user', users);
app.use('/hisreal', hisreal);
app.use('/station', station);
app.use('/hisdata', hisdata);
var uniResult = {
    Result: false,
    Detail: null
};

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    uniResult.Detail = 'NOT_FOUND';
    res.end(JSON.stringify(uniResult));
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    uniResult.Detail = err.message;
    res.end(JSON.stringify(uniResult));
});

module.exports = app;
