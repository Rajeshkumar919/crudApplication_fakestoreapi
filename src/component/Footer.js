import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p>&copy; 2023 Your Website. All rights reserved.</p>
        <nav style={navStyle}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

// Styles for the footer component
const footerStyle = {
  background: '#333',
  color: '#fff',
  padding: '1rem 0',
  textAlign: 'center',
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const navStyle = {
  marginTop: '0.5rem',
  a: {
    color: '#fff',
    marginRight: '1rem',
    textDecoration: 'none',
  },
};

export default Footer;
