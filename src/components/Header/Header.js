import React from "react";
// import logo from "./../../../logo.svg";
import logo from "./../../logo.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1>My App</h1>
        <nav className="main-nav">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Header;
