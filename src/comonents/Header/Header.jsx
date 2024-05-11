import React, { useState, useEffect } from "react";
import "./Header.css";
import AccountModal from "../../modals/AccountModal";
import PrivacyPolicy from "../../modals/PrivacyPolicy";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen && window.innerWidth <= 767) {
        setIsMenuOpen(false);
      }
    };

    if (window.innerWidth <= 767) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <div className="nav w-100 p-3">
      <div className="fw-bold fs-2">manaChoice</div>
      <div>
        <ul id="navbar" className={`navbar ${!isMenuOpen ? "active" : ""}`}>
          <li>
            <AccountModal />
          </li>
          <li>
            <PrivacyPolicy />
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={toggleMenu}>
        {isMenuOpen ? (
          <i className="fas fa-times fs-1"></i>
        ) : (
          <i className="fas fa-bars fs-1"></i>
        )}
      </div>
    </div>
  );
};

export default Header;
