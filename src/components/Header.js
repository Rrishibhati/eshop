import React from 'react';
import './Header.css';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <Link to="/" style={{textDecoration :'none'}} >
            <div className='header-logo'>
                <StorefrontIcon className='header-logo-icon' />
                <span className="header-logo-title">eShop</span>
            </div>
        </Link>
        <div className="header-search">
            <input className="header-search-input" />
            <SearchIcon className="header-search-icon" />
        </div>
        
        <div className="header-nav">
            <div className="header-nav-item">
                <span className="item-line-one">Hello Guest</span>
                <span className="item-line-two">SignIn</span>
            </div>
            <Link to="/checkout" style={{textDecoration :'none'}} >
                <div className="header-nav-item">
                    <span className="item-line-one">Your</span>
                    <span className="item-line-two">Shop</span>
                </div>
            </Link>
            <div className="header-nav-item">
                <ShoppingBasketIcon className=".header-basket-icon" />
                <span className=".header-basket-count">0</span>
            </div>
        </div>
    </div>
  )
}

export default Header