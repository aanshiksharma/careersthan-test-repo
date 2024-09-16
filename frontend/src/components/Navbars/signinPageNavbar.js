import LinkButton from "../Buttons/button.js";

// Styles
import "./navbar.scss";

function Navbar() {
  let link;
  return (
    <>
      <header>
        <div className="wrapper-2">
          <div className="left flex">
            <a href="/" className="logo">
              <img src="/icons/logo.svg" alt="" />
              <img src="/icons/logoName.svg" alt="careersthan" />
            </a>
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
