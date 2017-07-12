
var pool= require('../mysql/dbOperation');

module.exports =function(username,password,callback) {
    var sql="SELECT * FROM b_user WHERE NAME = '"+ username + "' AND PASSWORD = '" + password+"'";
    pool(sql).then(function(data){
        if(data.length>0)
            callback({status:1});
        else
            callback({status:0})
    },function(value){
        callback({status:0,reason:'error'});
    })
};