var pool= require('../mysql/dbOperation');
module.exports =function(callback) {
    var sqlss="select * from n_groundhisdata";
    pool(sqlss).then(function(data){
        callback({status:1,data:data});
    })

};
