import React from "react";
import "../style.css";

function Nav() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="information">Information</a>
          </li>
        </ul>
        <a href="/" className="site-title">
          OilTarator
        </a>
        <ul>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
