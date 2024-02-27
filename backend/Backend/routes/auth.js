const express = require("express");
const User = require('../models/User')
const fetchuser = require('../middlewares/fetchUser')
const router = express.Router();
const {body,validationResult} = require('express-validator')
const bcrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Tanmayisagoodboy'
//create a user using post "/api/auth" doesnt require auth
router.post('/',[
    body('password','password should be of length 5 min').isLength({min:5}),
    body('name', 'enter a valid name').isLength({min:3}),
    body('email', 'enter the valid email').isEmail()
],async (req,res)=>{
    let success = false;
    const result = validationResult(req);
  if (!result.isEmpty()) {
    return  res.status(400).json({success, errors: result.array() });
  }
  try {

  let user = await User.findOne({email:req.body.email});
  if(user) {
    return res.status(400).json({success,error:"sorry with user email already exists"})
  }
  const salt  =await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password,salt) ;

    user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass
    })
    const data = {
        user:{
            id:user.id
        }
    }
const authToken = jwt.sign(data,JWT_SECRET);
    success=true;
    res.json({success,authToken});

}catch(err){
        console.log(err.message);
        res.statuts(500).json({err:err.message})
    }
})
// authenticate a user .no login required

router.post('/login',[
    body('email','enter the valid email').isEmail(),
    body('password').exists()
], async(req,res)=>{
    let success =false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return  res.status(400).json({ success,errors: result.array() });
    }
    const {email,password}= req.body;
    try {
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(404).json({success,msg:"please try to login with correct creditenials"})
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
        res.statuts(500).json({err:"internal server error"})
    }
   
})

// route 3 Get logged in user details get user details 'api/auth/getuser'
 router.post('/getuser',fetchuser,async(req,res)=>{
    try{
          let userId = req.user.id;
            const user = await User.findById(userId).select('-password');
            res.json(user);

    }catch(err){
        console.log(err.message);
        res.status(500).json({err:"internal server error"})
    }
 })
module.exports = router;