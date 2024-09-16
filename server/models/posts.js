const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author:{
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'user', required: true 
        },
    description:{
         type: String, 
         required: true 
    },
    media: Buffer,
    likes: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user' 
        }
    ],
    comments: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment' 
        }
        ],
    createdAt: { 
        type: Date, 
        default: Date.now 
        }
})
  
module.exports  = mongoose.model('post', postSchema);
  

  