var pool= require('../mysql/dbOperation');
module.exports =function(path,username,callback) {
    var sql="SELECT * FROM film WHERE film_id = '"+ username+"'";
    pool(sql).then(function(data){
        if(data.length>0){
            var sqls="UPDATE film SET film_img='"+path+"' where film_id='"+username+"'";
        	pool(sqls).then(function(data){
                callback({status:1,Image:path});
            },function(value){
                callback({status:0})
            }) 
        }
        else
            callback({status:0})
    },function(value){
        callback({status:0,reason:'error'});
    })
};