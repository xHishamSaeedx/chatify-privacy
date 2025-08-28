import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../ChatGPT Image Aug 28, 2025, 08_56_54 PM.png";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="Chatify logo" style={{ height: 28, width: 28, marginRight: 8 }} />
          <span>Chatify</span>
        </Link>

        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          
          <div className="dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={() => setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen)}
            >
              Features
              <ChevronDown size={16} />
            </button>
            {isFeaturesDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/features" className="dropdown-item">Overview</Link>
                <Link to="/how-it-works" className="dropdown-item">How It Works</Link>
                <Link to="/download" className="dropdown-item">Download</Link>
              </div>
            )}
          </div>
          
          <Link to="/how-it-works" className={`nav-link ${isActive("/how-it-works") ? "active" : ""}`}>
            How It Works
          </Link>
          <Link to="/download" className={`nav-link ${isActive("/download") ? "active" : ""}`}>
            Download
          </Link>
          <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            About
          </Link>
          
          <div className="dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={() => setIsSupportDropdownOpen(!isSupportDropdownOpen)}
            >
              Support
              <ChevronDown size={16} />
            </button>
            {isSupportDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/support" className="dropdown-item">Help Center</Link>
                <Link to="/account-deletion" className="dropdown-item">Account Deletion</Link>
                <Link to="/reporting" className="dropdown-item">Reporting System</Link>
              </div>
            )}
          </div>
          
          <Link to="/account-deletion" className={`nav-link ${isActive("/account-deletion") ? "active" : ""}`}>
            Account Deletion
          </Link>
          <Link to="/reporting" className={`nav-link ${isActive("/reporting") ? "active" : ""}`}>
            Reporting System
          </Link>
          <Link to="/privacy-policy" className={`nav-link ${isActive("/privacy-policy") ? "active" : ""}`}>
            Privacy Policy
          </Link>
          <ThemeToggle />
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/features" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Features
          </Link>
          <Link to="/how-it-works" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            How It Works
          </Link>
          <Link to="/download" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Download
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/support" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Support
          </Link>
          <Link to="/account-deletion" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Account Deletion
          </Link>
          <Link to="/reporting" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Reporting System
          </Link>
          <Link to="/privacy-policy" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Privacy Policy
          </Link>
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
