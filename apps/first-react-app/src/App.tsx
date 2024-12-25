import React from 'react';
import {NavBar} from 'nav-bar';
import { ProductCard } from 'product-card';
import links from './data/links';
import products from './data/products';
import messages from './data/messages';


const App = () => {
  const handleAddToCart = (productTitle: string) => {
    alert(`${productTitle} ${messages.cart.product_add}`);
  };

  return (
    <div>
      <div>
        <NavBar links={links} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          onAddToCart={() => handleAddToCart(product.title)}
        />
      ))}
    </div>
  </div>
  );
};

export default App;
