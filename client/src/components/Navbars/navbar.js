import "./navbar.scss";

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
                placeholder="Search"
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
                <a href="/feed">Home</a>
              </li>
              <li>
                <a href="#">Network</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Messaging</a>
              </li>
              <li>
                <a href="#">Notifications</a>
              </li>
              <li>
                <a href="#" className="flex" aria-selected="false">
                  <img src="/icons/profileLogo.svg" alt="" />
                  Profile
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
