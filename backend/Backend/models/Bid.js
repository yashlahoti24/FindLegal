const mongoose = require('mongoose');
const {Schema} =  mongoose;
const Bidding = new Schema({
    description:{
        type:String,
        require:true
    },
    bidId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bidreq'
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"client"
    },
lawyerId :{
    type: mongoose.Schema.Types.ObjectId,
    ref :'lawyer'
},
practise:{
    type:String,require:true
},
price:{
    type:Number,require:true
},
date:{
    type:Date,
    default:Date.now
}
})
const Bid = mongoose.model('bid',Bidding);
module.exports= Bid;