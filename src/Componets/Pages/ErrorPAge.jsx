import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const errorContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const errorHeadingStyle = {
    fontSize: '2.5rem',
    color: '#FF5733',
    marginBottom: '15px',
  };

  const errorMessageStyle = {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '20px',
  };

  const errorLinkStyle = {
    padding: '10px 20px',
    fontSize: '1.1rem',
    backgroundColor: '#FF5733',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const errorLinkHoverStyle = {
    backgroundColor: '#FF8755',
  };

  return (
    <div style={errorContainerStyle}>
      <h1 style={errorHeadingStyle}>404 - Not Found</h1>
      <p style={errorMessageStyle}>The page you are looking for does not exist.</p>
      <Link
        to="/"
        style={{ ...errorLinkStyle, ...errorLinkHoverStyle }}
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
