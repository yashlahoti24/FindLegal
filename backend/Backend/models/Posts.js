const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserPost = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'client',require:true
    },
    title:{
        type:String,
        require:true
    },
    description: {
        type:String,
        require:true
    },
    tag:{
        type:[String],
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const Post = mongoose.model('post',UserPost);
module.exports= Post;