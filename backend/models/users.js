const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    fullname: String,
    email: String,
    age: Number,
    password: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'post',        },
    ],
    bio: String,
    profilePicture: Buffer,
    coverPicture: Buffer,
    skills: [{ type: String }],
    experience: [{
        company: String,
        position: String,
        startDate: { type: Date },
        endDate: { type: Date },
        description: String,
      }],
    education: [
        {
        school: String,
        degree: String,
        startDate: Date,
        endDate: Date, 
    }
    ],
    connections: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user' 
        }
    ],
    requestsSent: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user' 
        }
    ],
    requestsReceived: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user' 
        }
    ],
    followers: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user' 
        }
    ],
    following: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'user' 
        }
    ],
    createdAt: {
         type: Date, 
         default: Date.now 
        },
})

module.exports = mongoose.model('user',userSchema);



