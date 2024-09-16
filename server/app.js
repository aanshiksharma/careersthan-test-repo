const express = require("express");
const app = express();
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const PORT = 80;

require("dotenv").config();

const db = require("./config/mongoose-connection");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/usersRouter");
const postsRouter = require("./routes/postsRouter");
const profileRouter = require("./routes/profileRouter");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  })
);
app.use(flash());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/profile", profileRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("index", { error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
