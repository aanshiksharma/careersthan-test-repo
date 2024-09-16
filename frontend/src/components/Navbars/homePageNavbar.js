import LinkButton from "../Buttons/button.js";

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

            {/* Searchbar */}
            <form action="#" className="searchbar">
              <input
                type="text"
                name="search"
                id="searchBar"
                placeholder="Search for Jobs..."
              />
              <button type="submit" className="btn">
                <img src="/icons/searchIcon.svg" alt="" />
              </button>
            </form>
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
