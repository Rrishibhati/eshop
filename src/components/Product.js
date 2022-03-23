import React from 'react';
import './Product.css';
import { useStateValue } from './DataLayer/StateProvider';

function Product({ id, title, price, rating, image }) {

  const [ state, dispatch ] = useStateValue();

  const addToBasket = () => {
      dispatch({
        type : 'ADD_TO_BASKET',
        item : {
          id, title, price, rating, image
        }
      })
  } 

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
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product