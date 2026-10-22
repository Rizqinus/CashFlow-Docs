import React from 'react';
import { Search, Sun } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showProdukDropdown: boolean;
  setShowProdukDropdown: (show: boolean) => void;
  onHomeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  showProdukDropdown,
  setShowProdukDropdown,
  onHomeClick
}) => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
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
                    <div className="prod-badge">Cloud ERP</div>
                    <strong>CashFlow Online</strong>
                    <p>Sistem akuntansi dan pencatatan operasional bisnis terpadu</p>
                  </div>
                  <div className="dropdown-item">
                    <div className="prod-badge pos">Point of Sale</div>
                    <strong>CashFlow POS</strong>
                    <p>Aplikasi kasir pintar untuk ritel dan F&amp;B</p>
                  </div>
                  <div className="dropdown-item">
                    <div className="prod-badge lite">Mobile</div>
                    <strong>CashFlow Lite</strong>
                    <p>Pencatatan keuangan praktis via smartphone</p>
                  </div>
                </div>
              )}
            </div>

            <span className="nav-item">Open Class</span>
            <span className="nav-item">Video Tutorials</span>
          </nav>
        </div>

        <div className="navbar-right">
          <button className="btn-login-official">Login</button>
          
          <button className="theme-toggle-btn" title="Toggle Theme">
            <Sun size={18} />
          </button>

          <div className="search-bar">
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
