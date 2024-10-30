import LinkButton from "../Buttons/button.js";
import { Link } from "react-router-dom";

// Styles
import "./navbar.scss";

function Navbar() {
  let link;
  return (
    <>
      <header>
        <div className="wrapper-2">
          <div className="left flex">
            <Link to="/" className="logo">
              <img src="/icons/logo.svg" alt="" />
              <img src="/icons/logoName.svg" alt="careersthan" />
            </Link>
          </div>

          {/* Navbar */}
          <nav className="navbar">
            <ul className="navlist">
              <li>
                <a href="#">Get the App</a>
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
