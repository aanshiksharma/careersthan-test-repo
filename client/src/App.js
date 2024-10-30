import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home.js";
import SignIn from "./routes/SignIn.js";
import SignUp from "./routes/SignUp.js";
import Feed from "./routes/Feed.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
