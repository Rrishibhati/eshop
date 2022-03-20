import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
        <div className="product-info">
            <span className="title">Product Title</span>
            <div className="price">
                <small>$</small>
                <strong>30</strong>
            </div>
            <span className="rating">***</span>
        </div>
        <div className="product-image">
            <img src="./images/products/perse.jpg" alt="Product Image" />
        </div>
        <button>Add to Basket</button>
    </div>
  )
}

export default Product