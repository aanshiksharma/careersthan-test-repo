import React from "react";

import "./searchBar.scss";

function SearchBar({ placeholder, placeholderFontSize }) {
  return (
    <form action="/" className="searchbar">
      <input
        type="text"
        name="searchBar"
        placeholder={placeholder}
        style={{ fontSize: placeholderFontSize || "1rem" }}
      />

      <button type="submit" className="btn">
        <img src="/icons/searchIcon.svg" alt="" />
      </button>
    </form>
  );
}

export default SearchBar;
