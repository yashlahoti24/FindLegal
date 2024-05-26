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
const BidReq = require("../models/Bidreq");
const Bid = require("../models/Bid");
const BidAccept = require("../models/BidAccepted")
const nodemailer = require('nodemailer'); 
//req for a bid
router.post("/req",fetchUser,async(req,res)=>{
try{
let bid =await BidReq.create({userId:req.user.id,practise:req.body.practise});
return res.status(200).json(bid);
}catch(err){
return res.status(500).json({err:err.message});
}
})

//apply for a bid
router.post("/bids/apply/:id",fetchUser,async(req,res)=>{
    try {
        let {description,price}=req.body;
        let lawyerId =req.user.id;
        let bidId= req.params.id;
        let bid = await BidReq.findById(bidId);
        if(bid===null){
            return res.status(404).json({err:"bid doesnt exists"});
        }
        let userId= bid.userId;
        let applyForBid= await Bid.create({description,price,practise:bid.practise,lawyerId,bidId,userId});
        return res.status(200).json(applyForBid);
    }catch(err){
        return res.status(500).json({err:err.message});
    }

})
//showing all bids applied for a requested bid
router.post("/bids/show/:id",fetchUser,async(req,res)=>{
    try {
        let userId= req.params.id;
        console.log(userId);
        let bids = await Bid.find({ userId});
        console.log(bids);
        if(bids==null){
            return res.status(404).json({msg:"user does not found"});
        }
        return res.status(200).json(bids);
    }catch(err){
        return res.status(500).json({err:"internal server errror"});
    }
})
//get bids
router.post("/bids/",fetchUser,async(req,res)=>{
    try{
            let practise = req.query.practise;
            let bids;
            if(practise===undefined){
                bids= await BidReq.find();
            }else {
                bids= await BidReq.find({practise});
            }
            return res.status(200).json(bids);
    }catch(err){
        return res.status(500).json({err:err.message});
    }
})



//acceptance of a bid
function sendMail(){
    try{
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tanmay.yadav21@vit.edu',
            pass: 'vipz rjmc pnwb khtb'
        }
      });
    
      const mailOptions = {
        from: 'lahotiyash24@gmail.com',
        to: 'tanmaydyadav2003@gmail.com',
        subject: 'FindLegal - Informing regarding Bid Acceptance ',
        text: "Your bid has been accepted",
        //html: `
        //  <h1>Sample Heading Here</h1>
        //  <p>message here</p>
        //`,
        // attachments: [
        //   {
        //     filename: 'image.png',
        //     path: '<https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png>'
        //   }
        // ]
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
    
          console.log(error);
          return res.status(500).json({err:error})
        } else {
            console.log('Email sent successfully ');
            return res.status(200).json(info)
        }
      });
    }catch(err){
        return res.status(500).json({msg:err.message})
    }
}
//router node mailer
//acceptance of a bid
//bid req se bhi o req del hogi
// bid database bidId 
// router.delete()
router.delete("/bid-acceptance/:id",fetchUser,async (req,res)=>{
try{
let bidId = req.params.id;
let practise =req.body.practise;
let lawyerId= req.body.lawyerId;
let deleteFromBideRq=await BidReq.deleteOne({_id:bidId});
console.log("delete From BidId ");
let deleteFromBid = await Bid.deleteMany({bidId});
console.log("deleted from bid database");
let addToBidAcceptance = await BidAccept.create({userId:req.user.id,lawyerId,practise})
console.log("added to bid accepted database")
sendMail();
return res.status(200).json({deleteFromBid,deleteFromBideRq,addToBidAcceptance});
}catch(err){
    return res.status(500).json({err:err.message})
}
})


// show lawyer all bid accepted
router.post("/view-bid-acceptance-lawyer/:id",fetchUser,async(req,res)=>{
    try{
        let lawyerId = req.params.id;
        let lawyer = await Lawyer.findOne({lawyerId});
        let bidAcceptance = await BidAccept.find({lawyerId:lawyer._id});
        return res.status(200).json({bidAcceptance});

    }catch(err){
        return res.status(500).json({err:err.message});
    }

})


module.exports= router;