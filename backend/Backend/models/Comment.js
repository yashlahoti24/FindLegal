const mongoose = require('mongoose');
const {Schema} =  mongoose;
const PostComments = new Schema({
    description:{
        type:String,
        require:true
    },
postId : {
    type: mongoose.Schema.Types.ObjectId,
            ref :'post'
},
userId :{
    type: mongoose.Schema.Types.ObjectId,
    ref :'client'
},
date:{
    type:Date,
    default:Date.now
}
})
const Comment = mongoose.model('comment',PostComments);
module.exports= Comment;