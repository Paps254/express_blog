import express from 'express';
import bodyParser from "body-parser";
import * as PostController from './controller/post_controller.js';



var app=express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser);
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/",PostController.fetchPosts);

app.post("/post-data", PostController.createPosts)
app.get("/post", (req,res)=>{
    res.render("post")
})

const PORT = 3001;
app.listen(PORT,function(){
    console.log("app listening on : ",PORT);
})