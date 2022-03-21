import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, price, rating, image }) {
  return (
    <div className="checkout-product">
        <div>
            <img className="checkout-product-image" src={image} alt={id} />
        </div>
        <div className="checkout-product-info">
            <span className="title">{ title }</span>
            <div className="price">
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <span className="rating">
              {Array(rating).fill().map(() => <p>*</p>)}
            </span>
            <button>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct