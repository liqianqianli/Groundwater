var pool= require('../mysql/dbOperation');
module.exports =function(username,password,phone,callback) {
    var sqlss="INSERT INTO b_user(ID,NAME,PASSWORD,SIM) VALUES('"+username+"',"+password+",'"+phone+"')";
    pool(sqlss).then(function(data){
        callback({status:1});
    })
};
