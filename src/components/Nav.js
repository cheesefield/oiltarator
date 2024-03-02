import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

function Nav(props) {
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
  const changeLanguage = () => props.setLanguage(!props.language);

  const changeLangAndCloseMenu = () => {
    changeLanguage();
    closeMobileMenu();
  };

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

  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/about" ||
    window.location.pathname === "/products" ||
    window.location.pathname === "/contact"
  ) {
    return (
      <div>
        <nav className={navbar ? "sticky" : ""}>
          <NavLink to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="logo" />
          </NavLink>
          <ul className={click ? "navbar active" : "navbar"}>
            <li className="nav">
              <NavLink
                exact
                to="/"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav">
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
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/contact"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            <span className="language">
              <NavLink to="/de" onClick={changeLangAndCloseMenu}>
                de
              </NavLink>
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
  } else if (
    window.location.pathname === "/de" ||
    window.location.pathname === "/de/about" ||
    window.location.pathname === "/de/products" ||
    window.location.pathname === "/de/contact" ||
    props.language
  ) {
    return (
      <div>
        <nav className={navbar ? "sticky" : ""}>
          <NavLink to="/de" onClick={closeMobileMenu}>
            <img src={logo} alt="logo" />
          </NavLink>
          <ul className={click ? "navbar active" : "navbar"}>
            <li className="nav">
              <NavLink
                exact
                to="/de"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/de/about"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/de/products"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                Products
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/de/contact"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            <span className="language">
              <NavLink to="/" onClick={changeLangAndCloseMenu}>
                en
              </NavLink>
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
  } else {
    return (
      <div>
        <nav className={navbar ? "sticky" : ""}>
          <NavLink to="/de" onClick={closeMobileMenu}>
            <img src={logo} alt="logo" />
          </NavLink>
          <ul className={click ? "navbar active" : "navbar"}>
            <li className="nav">
              <NavLink
                exact
                to="/de"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/de/about"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/de/products"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                Products
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                exact
                to="/de/contact"
                activeClassName="nav-active"
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            <span className="language">
              <NavLink to="/" onClick={changeLangAndCloseMenu}>
                de
              </NavLink>
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
}

export default Nav;
