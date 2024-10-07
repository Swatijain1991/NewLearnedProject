import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, increaseItem, decreaseItem, removeItem, totalCost } = useContext(CartContext);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <h1>Your Cart</h1>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>
            <div>
              <button onClick={() => decreaseItem(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseItem(item)}>+</button>
            </div>
            <button onClick={() => removeItem(item)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
        <p>Total Cost: ${totalCost}</p>
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
