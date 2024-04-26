const mongoose = require('mongoose');
const {Schema} = mongoose;
const PostLikes = new Schema({
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
const Like = mongoose.model('like',PostLikes);
module.exports= Like;