const express =require("express");
const Post = require("../models/Posts");
const Like = require("../models/Likes");
const Comment = require("../models/Comment");
const router =express.Router();
const {body,validationResult} = require('express-validator')
const bcrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Tanmayisagoodboy';
const fetchUser = require('../middlewares/fetchUser');
const Lawyer = require("../models/Lawyer");


router.post("/:practise?/:city?/",async(req,res)=>{
    try{
        let exp = req.query.experience;
        let ratings = req.query.ratings;
        console.log(req.params.practise);
        console.log(req.params.city);

        let lawyer;
        if(req.params.practise!==undefined && req.params.city!==undefined){
            lawyer = (await Lawyer.find({practise:req.params.practise, city:req.params.city}));
        }else if(req.params.practise!==undefined){
            lawyer = (await Lawyer.find({practise:req.params.practise}));
            if(lawyer.length===0){
                lawyer = await Lawyer.find({city:req.params.practise});
            }
        }
        else lawyer= await Lawyer.find();
        if(ratings!==undefined){
            if(ratings==="desc")
            lawyer = lawyer.sort((a,b)=>b.ratings-a.ratings);
            else lawyer = lawyer.sort((a,b)=>a.ratings-b.ratings)
        }
        if(exp!==undefined){
            lawyer = lawyer.filter((a)=> a.exp>=exp);
        }
        return res.status(200).json({lawyer});
      
    }catch(err){
        return res.status(500).json({err:err.message});
    }
})



module.exports= router;