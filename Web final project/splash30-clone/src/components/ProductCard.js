import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        <strong>Price: </strong> Rs.{product.salePrice}{' '}
        <span className="original-price">Rs.{product.price}</span>
      </p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
