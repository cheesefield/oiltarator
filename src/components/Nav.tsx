"use client";

import React, { useState } from "react";
import { Link } from "@/navigation";
import Image from "next/image";
import logo from "../images/logo.png";
import LanguageSelector from "./LanguageSelector";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";

export default function Nav() {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = (): void => setClick(!click);

  const closeMobileMenu = (): void => {
    setClick(false);
    window.scrollTo(0, 0);
  };

  const t = useTranslations("Navbar");

  return (
    <nav className="navbar">
      <Link href="/" onClick={closeMobileMenu}>
        <Image src={logo} alt="logo" height={50} width={100} />
      </Link>
      <ul className={click ? "navbar active" : "navbar"}>
        <li className="nav">
          <NavLink href="/" onClick={closeMobileMenu}>
            {t("home")}
          </NavLink>
        </li>
        <li className="nav">
          <NavLink href="/contact" onClick={closeMobileMenu}>
            {t("contact")}
          </NavLink>
        </li>
        <li className="nav">
          <NavLink href="/gallery" onClick={closeMobileMenu}>
            {t("gallery")}
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
  );
}
