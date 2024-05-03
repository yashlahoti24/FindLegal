const mongoose = require('mongoose');
const {Schema} =  mongoose;
const BidAcceptance = new Schema({
  
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

date:{
    type:Date,
    default:Date.now
}
})
const BidAccept = mongoose.model('bidAccept',BidAcceptance);
module.exports= BidAccept;