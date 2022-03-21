import React from 'react';
import './Product.css';

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product" key={id}>
        <div className="product-info">
            <span className="title">{ title }</span>
            <div className="price">
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <span className="rating">
              {Array(rating).fill().map(() => <p>*</p>)}
            </span>
        </div>
        <div className="product-image">
            <img src={image} alt={id} />
        </div>
        <button>Add to Basket</button>
    </div>
  )
}

export default Product