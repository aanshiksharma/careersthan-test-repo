import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Components
import SearchBar from "../FormFields/searchBar";

// Styles
import "./navbar.scss";

function Navbar() {
  return (
    <>
      <header>
        <div className="wrapper-2">
          <div className="left flex">
            <Link to="/" className="logo">
              <img src="/icons/logo.svg" alt="" />
              <img src="/icons/logoName.svg" alt="careersthan" />
            </Link>

            <SearchBar placeholder={"Search"} />
          </div>

          {/* Navbar */}
          <nav className="navbar">
            <ul className="navlist">
              <li>
                <Link to="/feed">Home</Link>
              </li>
              <li>
                <Link to="/networs">Network</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/messages">Messaging</Link>
              </li>
              <li>
                <Link to="/notifications">Notifications</Link>
              </li>
              <li>
                <Link to="#" className="flex">
                  <img src="/icons/profileLogo.svg" alt="" />
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
