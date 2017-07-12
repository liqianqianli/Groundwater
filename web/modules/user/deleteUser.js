var pool= require('../mysql/dbOperation');
module.exports =function(username,callback) {
    var sql="DELETE FROM b_user WHERE NAME = '"+ username+"'";
    pool(sql).then(function(data){
        callback({status:1});
    },function(value){
        callback({status:0});
    });
};
