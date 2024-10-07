import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants.</p>
      <Link to="/products">
        <button className="get-started">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
