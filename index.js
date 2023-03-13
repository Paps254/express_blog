const express = require('express');
const bodyParser=require("body-parser");
const con = require("./utils/db-connection");

var app=express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser);
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{

    con.connect(/*'error',*/ function(err){
        con.query("select * from post order by created_at desc",function(err,posts, fields){
            if(err) throw err;
            //console.log("[mysql error]", err);
            res.render("home",{posts});
        });
    });

    // res.render("home");
});


app.get("/post",(req,res)=>{
   
    res.render("post");
});

app.post("/post-data",(req,res)=>{
    let postTitle=req.body.postTitle;
    let postBody = req.body.postBody;


    con.connect(function(err){
        con.query(`insert into post (title,body) values("${postTitle}","${postBody}")`);
    }
    );

    res.redirect("/")
})

const PORT = 3000;
app.listen(PORT,function(){
    console.log("app listening on : ",PORT);
})