var pool= require('../mysql/dbOperation');
module.exports =function(callback) {
    var sqlss="select * from n_groundhis_real";
    pool(sqlss).then(function(data){
        callback({status:1,data:data});
    })

};
