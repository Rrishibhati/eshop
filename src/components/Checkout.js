import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src="./images/checkouts/checkout-advt.jpg" alt="checkout-banner" className="checkout-advt-banner" />

        <div className="checkout-products">
          <h2 className='checkout-title'>Your Shopping Basket</h2>
          <CheckoutProduct
            id="101"
            title="Star Dust Women's Hobos Shoulder Bag"
            price={11.00}
            rating={4}
            image="./images/products/perse.jpg"
          />
          <CheckoutProduct
            id="101"
            title="Star Dust Women's Hobos Shoulder Bag"
            price={11.00}
            rating={4}
            image="./images/products/perse.jpg"
          />
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout