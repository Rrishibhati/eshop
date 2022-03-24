import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './DataLayer/StateProvider';
import { getBasketTotal } from './DataLayer/reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
        <CurrencyFormat 
            renderText= {(value) => (
                <>
                    <p>Subtotal ({basket.length} items) : <strong>{value}</strong></p>
                    <small className="subtotal-gift">
                        <input type='checkbox' /> This order contain a gift
                    </small>

                </>

            )}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
        <button>Processed to checkout</button>
    </div>
  )
}

export default Subtotal