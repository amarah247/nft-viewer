import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Token Trinkets</h1>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Explore</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">My Tokens</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;