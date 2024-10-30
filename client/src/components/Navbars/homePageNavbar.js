import React from "react";

// Components
import LinkButton from "../Buttons/button.js";
import SearchBar from "../FormFields/searchBar.js";

// Styles
import "./navbar.scss";
import "./homePageNavbar.scss";

function Navbar() {
  return (
    <>
      <header>
        <div className="wrapper-2">
          <div className="left flex">
            <a href="/" className="logo">
              <img src="/icons/logo.svg" alt="" />
              <img src="/icons/logoName.svg" alt="careersthan" />
            </a>

            <SearchBar placeholder={"Search"} />
          </div>

          {/* Navbar */}
          <nav className="navbar">
            <ul className="navlist">
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">People</a>
              </li>
              <li className="ainame">
                <a href="#">Firoza AI</a>
                <img class="ailogo" src="/icons/AI logo.svg" alt="" />
              </li>
              <li>
                <a href="#">Get the app</a>
              </li>
              <li>
                <LinkButton
                  label={"Sign In"}
                  link={"/signin"}
                  classes={"sign-in"}
                />
              </li>
              <li>
                <LinkButton
                  label={"Join Now"}
                  link={"/signup"}
                  classes={"join-now"}
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
