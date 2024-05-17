import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import LanguageSelector from "../components/LanguageSelector.js";
import "../i18.js";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t } = useTranslation();

  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo(0, 0);
  };

  if (click) {
    document.body.classList.add("body");
  } else {
    document.body.classList.remove("body");
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <div>
      <nav className={navbar ? "sticky" : ""}>
        <NavLink to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="logo" />
        </NavLink>
        <ul className={click ? "navbar active" : "navbar"}>
          <li className="nav">
            <NavLink exact to="/" onClick={closeMobileMenu}>
              {t("nav1")}
            </NavLink>
          </li>
          {/* <li className="nav">
            <NavLink
              exact
              to="/about"
              activeClassName="nav-active"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav">
            <NavLink
              exact
              to="/products"
              activeClassName="nav-active"
              onClick={closeMobileMenu}
            >
              Products
            </NavLink>
          </li> */}
          <li className="nav">
            <NavLink exact to="/contact" onClick={closeMobileMenu}>
              {t("contact")}
            </NavLink>
          </li>
          <span>
            <LanguageSelector />
          </span>
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
