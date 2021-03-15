import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

//import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          ORCHID
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes className="fas fa-times" />
          ) : (
            <FaBars className="fas fa-bars" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
              menu
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/buy"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              buy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;