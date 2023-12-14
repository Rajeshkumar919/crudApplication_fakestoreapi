import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>N shah Ecommerce Website</div>
      <nav style={navStyle}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About Us</a>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
};

// Styles for the header component
const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
};

export default Header;
