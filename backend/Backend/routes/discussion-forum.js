const express =require("express");
const Post = require("../models/Posts");
const Like = require("../models/Likes");
const Comment = require("../models/Comment");
const Client = require("../models/Client");
const Lawyer =require("../models/Lawyer");
const router =express.Router();
const {body,validationResult} = require('express-validator')
const bcrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Tanmayisagoodboy';
const fetchUser = require('../middlewares/fetchUser');
//get user;
router.post("/getuser",fetchUser,async(req,res)=>{
    try{
        let id= req.user.id;
        let user = await Client.find({_id:id});
        if(user===null|| user.length===0){
            console.log("Entered to search into lawyers database")
            user= await Lawyer.find({_id:id});
        }
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({err:err.message});
    }
})
//add a post  | login required 
router.post("/addpost/",fetchUser,[
    body("title","please enter valid title").exists().notEmpty(),
    // body("description","please enter valid description").notEmpty(),
    body("tag","please enter atleast one tag").notEmpty()
],async(req,res)=>{
// heree the id in the parameter refers to the user id
let results =validationResult(req);
if(!results.isEmpty()){
    return res.status(400).json({err:results.array()});
}
try{
    console.log("hello")
    console.log(req.user.id);
let {title,description,tag} = req.body;
let user = await Post.create({
    userId:req.user.id,title,description,tag
});
return res.status(200).json({user}); 
}catch(err){
    return res.status(500).json({err:err.message});
}
})
//view all posts | no registration no login required to view a post
router.get("/",async(req,res)=>{
    try{
 let post = await Post.find();
 return res.status(200).json(post);
}catch(err){
    return res.status(500).json({err:err.message});
}
})
// view a specific post | no registration no login required to view a specific post
router.post("/:id",async(req,res)=>{
    try{
        //here the id in the parameter refers to the post id
        let post = await Post.find({_id:req.params.id});
        return res.status(200).json({post});
    }catch(err){
        return res.status(500).json({err:err.message});
    }
})
//like a post
router.post("/like/:id",fetchUser, async(req,res)=>{
    try{
        let like = await Like.create({
            postId:req.params.id,
            userId:req.user.id
        })
        return res.status(200).json({like});
    }catch(err) {
        return res.status(500).json({err:err.message});
    }
})
//dislike a post
router.delete("/dislike/:id",fetchUser,async(req,res)=>{
    try{
        let dislike = await Like.deleteOne({
            postId:req.params.id,
            userId:req.user.id
        })
        return res.status(200).json({dislike});
    }catch(err) {
        return res.status(500).json({err:err.message});
    }
})
//how to 
//comment a post
router.post("/comment/:id",fetchUser,[
    body("description","please enter a valid description").exists()
],async(req,res)=>{
    let results = validationResult(req);
    if(!results.isEmpty()){
        return res.status(400).json({err:results.array()});
    }
    try {
           let com = await Comment.create({
            postId:req.params.id,
            userId:req.user.id,
            description:req.body.description
           })
           return res.status(200).json(com);
            
    }catch(err){
        return res.status(500).json({err:err.message});
    }
})
//get all comments on the post 
router.post("/postcomments/:id",async(req,res)=>{
    try {
        let com = await Comment.find({postId:req.params.id});
        res.status(200).json(com);
    }catch(err){
        return res.status(500).json({err:err.message});
    }
})
//get all likes on the post 
router.post("/postlikes/:id",async(req,res)=>{
    try {
        let com = await Like.find({postId:req.params.id});
        res.status(200).json(com);
    }catch(err){
        return res.status(500).json({err:err.message});
    }
})

//delete the post
router.delete("/delete/:id",fetchUser,async(req,res)=>{
    try{
        let deletedPos = await Post.deleteOne({_id:req.params.id});
        let deleteCom = await Comment.deleteMany({postId:req.params.id});
        let deleteLike = await Like.deleteMany({postId:req.params.id});
        return res.status(200).json({deletedPos,deleteCom,deleteLike});
    }catch(err){
        return res.status(500).json({err:err.message});
    }
    
})

//get user by id
router.post("/get/:id",async(req,res)=>{
    try{
        let id =req.params.id;
        let user = await Client.find({_id:id});
        if(user===null){
            user= await Lawyer.find({_id:id});
        }
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({err:err.message})

    }
})
//filter a post based on tags
// router.post("/",async(req,res)=>{

// })

module.exports = router;