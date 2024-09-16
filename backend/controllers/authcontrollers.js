const userModel = require('../models/users');
const postsModel = require('../models/posts');
const notificationModel = require("../models/notification");
const messagesModel = require("../models/messages");
const connectionRequestModel = require("../models/connectionRequests");
const commentsModel = require("../models/comments");
const employerModel = require("../models/employers");
const jobpostmodel = require("../models/job-posts")

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const generateToken = require('../utils/generatetoken')

module.exports.registerUser = async (req,res) => {
    try {let {email, password, username}  = req.body; 

    let user = await userModel.findOne({email:email});
    if(user) {
        req.flash("error",  "You already have an account, please login!")
        return res.redirect("/")
    }

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async function(err, hash){
            if(err){
                return res.send(err.message)
            } else { 
                let user = await userModel.create({
                    email,
                    password: hash,
                    username
                }); 

                let token = generateToken(user);
                res.cookie("token", token);
                res.redirect('/feed')
            };
        })
    })
    } catch (err) {
        res.send(err.message);
    }    
}

module.exports.loginUser = async (req,res)=>{
    let{email, password} = req.body;

    let user = await userModel.findOne({email:email});
    if(!user){
        req.flash("error", "Email or password incorrect");
        return res.redirect("/")
    } 
    
    bcrypt.compare(password, user.password, (err, result)=> {
        if(result){
            let token = generateToken(user);
            res.cookie("token", token);
            res.redirect("/feed")
        } else {
            req.flash("error", "Email or password incorrect");
            return res.redirect("/")
        }
    })

}

module.exports.logout = (req,res)=>{
    res.cookie("token", "");
    res.redirect("/");
}
