const mongoose =require('mongoose');
const {Schema} = mongoose;
const ClientSchema = new Schema({
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
    flag:{
        type:Boolean,
        default:false
    }
})
const Client = mongoose.model('client', ClientSchema)
// User.createIndexes()
module.exports = Client