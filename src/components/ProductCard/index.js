

import React from 'react';

function ProductCard({ product, onClick }) {
  return (
    <div data-testid={`product-card-${product.id}`} className="card" onClick={onClick} >
      <div className="card-content" datatest-id="card-product">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <span>{(product.priceFormatted)}</span>
      </div>
      <img
        alt={product.name}
        src={product.image}
      />
    </div>

  );
}

export default ProductCard;