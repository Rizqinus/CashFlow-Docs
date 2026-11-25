import React, { useState } from 'react';
import { Search, Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showProdukDropdown: boolean;
  setShowProdukDropdown: (show: boolean) => void;
  onHomeClick: () => void;
  isDark?: boolean;
  toggleTheme?: () => void;
  onToggleMobileMenu?: () => void;
  isMobileMenuOpen?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  showProdukDropdown,
  setShowProdukDropdown,
  onHomeClick,
  isDark = false,
  toggleTheme,
  onToggleMobileMenu,
  isMobileMenuOpen = false
}) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          {/* Mobile hamburger menu */}
          <button 
            className="mobile-hamburger-btn" 
            onClick={onToggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="brand-logo" onClick={onHomeClick}>
            <img src="/assets/logo-cashflow.png" alt="CashFlow Logo" className="logo-img" />
          </div>

          <nav className="nav-links">
            <div 
              className="nav-item has-dropdown"
              onMouseEnter={() => setShowProdukDropdown(true)}
              onMouseLeave={() => setShowProdukDropdown(false)}
            >
              <span>Produk</span>
              <span className="dropdown-arrow">▼</span>

              {showProdukDropdown && (
                <div className="produk-menu-dropdown">
                  <div className="dropdown-item active-prod">
                    <span>CashFlow Online</span>
                  </div>
                  <div className="dropdown-item">
                    <span>CashFlow POS</span>
                  </div>
                  <div className="dropdown-item">
                    <span>CashFlow Lite</span>
                  </div>
                  <div className="dropdown-item">
                    <span>Bliss</span>
                  </div>
                  <div className="dropdown-item">
                    <span>CashFlow Connect &amp; Earn</span>
                  </div>
                </div>
              )}
            </div>

            <span className="nav-item">Open Class</span>
            <span className="nav-item">Video Tutorials</span>
          </nav>
        </div>

        <div className="navbar-right">
          <button className="btn-login">Login</button>
          
          <button 
            className="theme-toggle-btn" 
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile search toggle icon */}
          <button 
            className="mobile-search-toggle-btn"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <div className={`search-bar ${showMobileSearch ? 'mobile-visible' : ''}`}>
            <Search size={15} className="search-icon-svg" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="kbd-wrapper">
              <kbd className="kbd-box">ctrl</kbd>
              <kbd className="kbd-box">K</kbd>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
