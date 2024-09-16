const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: 'default-profile.png'
    },
    website: {
        type: String,
        trim: true
    },
    industry: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    employees: {
        type: Number,
        default: 0
    },
    jobPosts: [{
        type: mongoose.Schema.Types.ObjectId,  // Corrected this line
        ref: 'JobPost'
    }],
    rating: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Employer', employerSchema);
