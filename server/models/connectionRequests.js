const mongoose = require('mongoose');

const connectionRequestSchema = new mongoose.Schema({
    sender: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'user'
        },
    receiver: {
         type: mongoose.Schema.Types.ObjectId, ref: 'user', 
         required: true 
        },
    status: { 
        type: String, enum: ['pending', 'accepted', 'declined'],
        default: 'pending' 
        },

    createdAt: { 
        type: Date, 
        default: Date.now 
        }
  });
  
  module.exports = mongoose.model('connectionRequest', connectionRequestSchema);
  