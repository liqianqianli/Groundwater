/**
 * Created by JY.
 */
var express = require('express');
var router = express.Router();
var parsers = require('../modules/parsers');
var userLogin = require('../modules/user/userLogin');
var register = require('../modules/user/register');
var daleteuser = require('../modules/user/deleteUser');
var crypto = require('crypto');
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
router.use('/login', function (req, res) {
    var username = req.param('username');
    var password = req.param('password');
    userLogin(username, password, function (result) {
        parsers.resultProc(req, result, res);  
    });
});

router.use('/register', function (req, res) {
        var username = req.param('username');
        var password = req.param("password");
        var phone = req.param("phone");
        register(username,password,phone,function (result) {
            parsers.resultProc(req, result, res);
        });
});
router.use('/daleteUser', function (req, res) {
        var username = req.param('username');
        daleteuser(username, function (result) {
            parsers.resultProc(req, result, res);
        });
});
module.exports = router;