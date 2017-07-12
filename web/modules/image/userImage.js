var pool= require('../mysql/dbOperation');
module.exports =function(path,username,callback) {
    var sql="SELECT * FROM user WHERE emp_no = '"+ username+"'";
    pool(sql).then(function(data){
        if(data.length>0){
            var sqls="UPDATE user SET user_img='"+path+"' where emp_no='"+username+"'";
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