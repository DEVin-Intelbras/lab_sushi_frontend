import React from 'react';

function ProductCard({ product, onClick }) {
  return (
    <div data-testid={`product-card-${product.id}`} className="card" onClick={onClick}>
      <div className="card-content">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <span>{(product.priceFormatted)}</span>
        <span>{product.price < 10 ? 'promoção' : 'valor normal'} </span>
      </div>
      <img
        alt={product.name}
        src={product.image}
      />
    </div>
  );
}

export default ProductCard;