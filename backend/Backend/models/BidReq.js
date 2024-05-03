const mongoose = require('mongoose');
const {Schema} =  mongoose;
const BidReq = new Schema({
    
userId :{
    type: mongoose.Schema.Types.ObjectId,
    ref :'client',require:true
},

practise:{
    type:String,require:true
},

date:{
    type:Date,
    default:Date.now
}
})
const BidRequest = mongoose.model('bidreq',BidReq);
module.exports= BidRequest;