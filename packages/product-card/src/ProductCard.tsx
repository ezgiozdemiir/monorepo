import React from 'react';
import './ProductCard.scss';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-card__image" />
      <h2 className="product-card__title">{title}</h2>
      <p className="product-card__price">{price}</p>
      <button className="product-card__button" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
