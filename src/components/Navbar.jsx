import React from "react";
import { SunIcon, MoonIcon, CloseIcon, MenuIcon } from "./Icons";
import { NAV_ITEMS } from "../constants/data";
import './navbar.css';

export default function Navbar({ dark, setDark, menuOpen, setMenuOpen, scrollTo }) {
  // Separate Contact from the rest of the items
  const mainNavItems = NAV_ITEMS.filter(item => item.toLowerCase() !== 'contact');
  const hasContact = NAV_ITEMS.some(item => item.toLowerCase() === 'contact');

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">Guna Sekhar</div>
        
        {/* Main navigation items */}
        <div className="nav-links">
          {mainNavItems.map((n) => (
            <span key={n} className="nav-link" onClick={() => scrollTo(n)}>
              {n}
            </span>
          ))}
        </div>

        <div className="nav-actions">
          {/* Individual Contact Button placed on the right */}
          {hasContact && (
            <button className="nav-contact-btn" onClick={() => scrollTo('Contact')}>
              Contact Me
            </button>
          )}

          <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((n) => (
          <span key={n} className="mobile-link" onClick={() => { scrollTo(n); setMenuOpen(false); }}>
            {n}
          </span>
        ))}
      </div>
    </>
  );
}