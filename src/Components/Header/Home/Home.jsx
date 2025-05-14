import React from "react";
import "./home.css";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="home">
      <div className="home-nav">
        <h2>NAVIGATION</h2>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/house">House</Link>
            </li>
            <li>
              <Link to="/floor">Floor</Link>
            </li>
            <li>
              <Link to="/flat">Flat</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="home-right">RIGHT</div>
    </div>
  );
}
