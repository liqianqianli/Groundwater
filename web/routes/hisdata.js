/**
 * Created by JY.
 */
var express = require('express');
var router = express.Router();
var parsers = require('../modules/parsers');
var userLogin = require('../modules/hisdata/query');
var crypto = require('crypto');
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
router.use('/query', function (req, res) {
    userLogin(function (result) {
        parsers.resultProc(req, result, res);  
    });
});

module.exports = router;