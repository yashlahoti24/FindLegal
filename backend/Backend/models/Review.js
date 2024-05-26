const mongoose = require('mongoose');
const {Schema} =  mongoose;
const Review= new Schema({
    description:{
        type:String,
        require:true
    },
  
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"client"
    },
lawyerId :{
    type: mongoose.Schema.Types.String,
    ref :'lawyer'
},
ratings:{
    type:Number,
    require:true,
    default:0
}
})
const ReviewLawyer = mongoose.model('review',Review);
module.exports= ReviewLawyer;