import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your pages/components
import LandingPage from './LandingPage';
import ProductListingPage from './ProductListingPage';
import CartPage from './CartPage';

const App = () => {
  return (
    <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Product Listing Page Route */}
          <Route path="/products" element={<ProductListingPage />} />

          {/* Cart Page Route */}
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
