import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-official">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/assets/logo-cashflow.png" alt="CashFlow Logo" className="footer-logo" />
        </div>
        <p className="copyright-text">
          Copyright © 2026 PT Cipta Karya Multimedia | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
