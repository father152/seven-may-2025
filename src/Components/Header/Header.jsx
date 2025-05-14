import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 
import logo from "../Image/чудак.png"


export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <Link><img src={logo} alt="Logo" className="logo" /></Link>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
