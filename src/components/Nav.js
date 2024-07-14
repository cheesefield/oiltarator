import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import LanguageSelector from "../components/LanguageSelector.js";
import "../i18.js";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t } = useTranslation();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="logo" />
        </NavLink>
        <ul className={click ? "navbar active" : "navbar"}>
          <li className="nav">
            <NavLink to="/" onClick={closeMobileMenu}>
              {t("nav1")}
            </NavLink>
          </li>
          {/* <li className="nav">
            <NavLink
              to="/about"
              activeClassName="nav-active"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav">
            <NavLink
              to="/products"
              activeClassName="nav-active"
              onClick={closeMobileMenu}
            >
              Products
            </NavLink>
          </li> */}
          <li className="nav">
            <NavLink to="/contact" onClick={closeMobileMenu}>
              {t("nav2")}
            </NavLink>
          </li>
          <li className="nav">
            <NavLink to="/gallery" onClick={closeMobileMenu}>
              {t("nav3")}
            </NavLink>
          </li>
          <LanguageSelector />
        </ul>
        <div
          onClick={handleClick}
          className={click ? "menu-btn open" : "menu-btn"}
        >
          <div className="menu-btn__burger"></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
