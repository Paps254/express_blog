const express = require('express');
const bodyParser=require("body-parser");
const connection = require("./utils/db-connection");

var app=express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser);
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{

    connection.connect(function(err){
        connection.query("select * from post order by created_at desc",function(err,posts){
            if(err) throw (err);
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


    connection.connect(function(err){
        connection.query(`insert into post (title,body) values("${postTitle}","${postBody}")`);
    }
    );

    res.redirect("/")
})

const PORT = 3001;
app.listen(PORT,function(){
    console.log("app listening on : ",PORT);
})