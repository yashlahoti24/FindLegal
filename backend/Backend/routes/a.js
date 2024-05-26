const express =require("express");
const Client = require("../models/Client");
const Lawyer = require("../models/Lawyer");
const router =express.Router();
const {body,validationResult} = require('express-validator')
const bcrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Tanmayisagoodboy';
const fetchUser = require('../middlewares/fetchUser');
//api get lawyer by id | authtoken required
router.post("/getlawyer/:id",fetchUser,async(req,res)=>{
    try{
    let id = req.params.id;
    console.log(id)
    let lawyer = await Lawyer.find({lawyerId:id});
    if(lawyer===null || lawyer ===undefined){
        return res.status(404).json({err:"lawyer not found"});
    }
    return res.status(200).json(lawyer);
    }catch(err){
        return res.status(500).json({err:err.message});
    }
    })
//api for registration of client  | no authtoken required
router.post('/user-registration',
[
        body('name',"please enter the valid name").isLength({min:3}),
        body('email',"please enter the valid email").isEmail(),
        body('password',"password length should be atleast 6 characters").isLength({min:5}),
        body("phoneNo","please enter valid phone no").isLength(10)
],
async (req,res)=>{
    let success= false;
    const result = validationResult(req);
if(!result.isEmpty()){
    return res.status(400).json({success,err:result.array()});
}
try{
    let user =await Client.find({email:req.body.email});
let {name,email,password,phoneNo,dob} = req.body;
console.log(user);
if(user.length!==0) {
   return res.status(400).json({success,err:"email adready exists"});
} 
let salt= await bcrypt.genSalt(10);
let pass =await bcrypt.hash(password,salt);
user = await Client.create({
    name,email,password:pass,phoneNo,dob
});
const data = {
            user:{
                id:user.id
            }
        }
let authToken = jwt.sign(data,JWT_SECRET);
success=true;
return res.status(200).json({success,authToken,user});
}catch(err){
  return  res.status(500).json({success,err:err.message});
}
})

//api for registration of lawyer | no authtoken required

router.post('/laywer-registration/',
[
    body('password',"password length should be atleast 6 characters").isLength({min:5}),
    // body("phoneNo","please enter valid phone no").isLength(10),
    body('bio',"please enter the valid bio").isLength({min:5}),
],
async (req,res)=>{
    let success= false;
    const result = validationResult(req);
if(!result.isEmpty()){
    return res.status(400).json({success,err:result.array()});
}
try{
    let user = await Lawyer.findOne({lawyerId:req.body.lawyerId});
    let {name,email,password,phoneNo,dob,lawyerId,bio,court,exp,city,ratings,practise} = req.body;
    if(user){
        return res.status(400).json({err:"lawyer already exists"});
    }
    let salt= await bcrypt.genSalt(10);
let pass =await bcrypt.hash(password,salt);
 user = await Lawyer.create({
  name,email,password:pass,phoneNo,dob,lawyerId,bio,court,exp,city,ratings,practise
});
const data = {
            user:{
                id:req.params.id
            }
        }
let authToken = jwt.sign(data,JWT_SECRET);
success=true;
return res.status(200).json({success,authToken});
}catch(err){
  return  res.status(500).json({success,err:err.message});
}
})

//api for login of user
router.post('/login/user',[
    body('email',"please ente valid email").isEmail(),
    body('password',"please enter valid password").exists()
],async(req,res)=>{
let {email,password} = req.body;
try {
    let success =false;let flag=false;
    let results  =validationResult(req);
    if(!results.isEmpty()) {
        return res.status(400).json({err:results.array()});
    }
    let user =await Client.findOne({email});
    if(!user) {
        user = await Lawyer.findOne({email});
        console.log(user.password, password);
        flag=true;
        if(!user)
        return res.status(404).json({success,err:'please enter valid credentials email'});

    }
    
    const passwordCompare =await bcrypt.compare(password,user.password);
    // console.log(passwordCompare)
        if(!passwordCompare){
            return res.status(404).json({success,msg:"please try to login with correct creditenials"})
        }
        const payLoad = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(payLoad,JWT_SECRET);
        success=true;
        res.json({flag,success,authToken});
    }catch(err){
        console.log(err.message);
        res.status(500).json({err:"internal server error"})
    }

})
// api for login of lawyer

    router.post('/login/lawyer',[
        body('email',"please ente valid lawyerId").isEmail(),
        body('password',"please enter valid password").exists()
    ],async(req,res)=>{
    let {email,password} = req.body;
    try {
        let success =false;
        let results  =validationResult(req);
        if(!results.isEmpty()) {
            return res.status(400).json({err:results.array()});
        }
        const user =await Lawyer.findOne({email});
        if(!user) {
            return res.status(404).json({success,err:'please enter valid credentials lawyerId'});
        }
        
        const passwordCompare = bcrypt.compare(password,user.password);
            if(!passwordCompare){
                return res.status(404).json({success,msg:"please try to login with correct creditenials"})
            }
            const payLoad = {
                user:{
                    id:user.id
                }
            }
            const authToken = jwt.sign(payLoad,JWT_SECRET);
            success=true;
            res.json({success,authToken});
        }catch(err){
            console.log(err.message);
            res.status(500).json({err:"internal server error"})
        }

    })

module.exports = router;