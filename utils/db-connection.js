
var mysql = require("mysql");
var con=mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: "",
        database:"express_blog"
    }
    );
    
    con.connect(function(err){
        //if (err) throw(err);
        //console.log("Connected!");
        console.log("[mysql error]", err);
    });

module.exports=con;