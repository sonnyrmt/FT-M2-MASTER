import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="navBar">
      <div className="brand">
        <img src={Logo} />
        <h3 className="headerTitle">Henry - Weather App</h3>
      </div>
      <div className="navSearch">
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  );
}

export default Nav;
