const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Post', required: true 
  }, 
  userId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'user', required: true 
    },
  text: { 
    type: String, 
    required: true 
  },
  likes: [
    {
       type: mongoose.Schema.Types.ObjectId, 
       ref: 'user' 
    }
  ], 
  createdAt: {
     type: Date, 
     default: Date.now 
    } 
  });
  
  module.exports = mongoose.model('comment', commentSchema);
  