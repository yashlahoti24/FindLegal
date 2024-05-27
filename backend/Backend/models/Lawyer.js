const mongoose = require("mongoose");
const {Schema} = mongoose;
const LawyerSchema= new Schema({
    flag: {
        type:Boolean,
       default:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phoneNo:{
        type:Number,
        require:true
        
    },
    dob:{
        type:Date
    },
    // address:{
    //     street:{
    //         type:String,
    //         required:true
    //     },
    //     city:{
    //         type:String,
    //         required:true
    //     },
    //     state:{
    //         type:String,
    //         required:true
    //     },
    //     pincode:{
    //         type:Number,
    //         required:true

    //     }
    // },
    date:{
        type:Date,
        default:Date.now
    },
    lawyerId:{
            type: Number,
            unique:true
    },
    bio:{
      type:String  
    },
    ratings:{
        type:Number,
        default:0
    },
    exp:{
        type:Number,default:0
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
    },
    img:{
        type:String
    }
    
})
const Lawyer = mongoose.model('lawyer',LawyerSchema);
module.exports = Lawyer