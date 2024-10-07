import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import plantsData from './PlantsData'; 

const ProductListingPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <h1>Our Plants</h1>
      
      <section>
        <h2>Aromatic Plants</h2>
        <div className="product-section">
          {plantsData.filter(plant => plant.category === 'Aromatic').map(plant => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <p>Price: ${plant.price}</p>
              <button onClick={() => addToCart(plant)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Medicinal Plants</h2>
        <div className="product-section">
          {plantsData.filter(plant => plant.category === 'Medicinal').map(plant => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <p>Price: ${plant.price}</p>
              <button onClick={() => addToCart(plant)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductListingPage;
