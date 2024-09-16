const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const {registerUser, loginUser, logout}= require('../controllers/authcontrollers')


router.get('/', (req, res) => {
    res.send('hi');
});

router.post("/register", registerUser);

router.post("/login", loginUser)

router.get("/logout", logout)

module.exports = router;