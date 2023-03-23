// import connection from "../utils/db-connection.js";

import { Post } from "./models/post.model.js";



export const createPosts = (req, res) => {
    let postTitle = req.body.postTitle;
    let postBody = req.body.postBody;

    let newPost= new Post();
    newPost.title=postTitle;
    newPost.body=postBody;
    newPost.save().then(p=>{
        res.redirect("/")
    }).catch(e=>{
        console.log(e);
        res.redirect("/")
    });
   
}

export const fetchPosts = (req, res) => {
    Post.findAll().then(posts => {
        console.log(posts)
        res.render("home", { posts });
    }).catch(e => {
        console.log(e);
    });
}