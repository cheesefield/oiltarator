import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({ to, children, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const className = isActive ? "nav-active" : "";

  return (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;
