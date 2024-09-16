const jwt = require("jsonwebtoken");
const userModel = require("../models/users");
const productModel = require("../models/posts");
const notificationModel = require("../models/notification");
const messagesModel = require("../models/messages");
const connectionRequestModel = require("../models/connectionRequests");
const commentsModel = require("../models/comments");
const employerModel = require("../models/employers");
const jobpostmodel = require("../models/job-posts")

module.exports = async function (req, res, next){
    if(!req.cookies.token){
        req.flash("error", "you need to login first");
        return res.redirect('/');
    }

    try{
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel
            .findOne({email: decoded.email})
            .select("-password");

            req.user = user;

            next();
    } catch(err){
        req.flash("error", "something went wrong");
        res.redirect('/');
    }
};