const mongoose = require("mongoose");
const {Schema} = mongoose;
const LawyerSchema= new Schema({
    lawyerId:{
            type: mongoose.Schema.Types.ObjectId,
            ref :'client'
    },
    bio:{
      type:String  
    },
    ratings:{
        type:Number,
        default:0
    },
    exp:{
        type:Number
    },
    court:{
        type:String,
        require:true
    },
    practise:{
        type:String,
        require:true
    },
    city:{
        type:String,require:true
    }
})
const Lawyer = mongoose.model('lawyer',LawyerSchema);
module.exports = Lawyer