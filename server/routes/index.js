const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();
require("../middlewares/isLoggedIn");

router.get("/", (req, res) => {
  res.render(index);
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/feed", isLoggedIn, (req, res) => {
  res.render("feed");
});

module.exports = router;
