import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './DataLayer/StateProvider';

function Checkout() {
  const [ {basket}, dispatch ] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src="./images/checkouts/checkout-advt.jpg" alt="checkout-banner" className="checkout-advt-banner" />

        <div className="checkout-products">
          <h2 className='checkout-title'>Your Shopping Basket</h2>
          {
            basket.map((item) => (
              <CheckoutProduct key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))
          }
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout